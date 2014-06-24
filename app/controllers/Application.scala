package controllers

import play.api._
import play.api.mvc._

import scalax.io._
import java.nio.file.{Paths, Files}
import scala.sys.process._
import java.io.File
import java.net.URLEncoder.encode

object Application extends Controller {


  def headers = List(
    "Access-Control-Allow-Origin" -> "*",
    "Access-Control-Allow-Methods" -> "GET, POST, OPTIONS, DELETE, PUT",
    "Access-Control-Max-Age" -> "3600",
    "Access-Control-Allow-Headers" -> "Origin, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Credentials" -> "true"
  )

  def options(url: String) = Action { request =>
    NoContent.withHeaders(headers : _*)
  }

  def index = Action { implicit request =>
    Ok(views.html.index(request.host))
  }

  def serveTexImage(tex: String) = Action {
    val outputImageLocation = createPngFromTex(tex)
    Ok.sendFile(content = new File(outputImageLocation), inline = true)
  }

  def createPngFromTex(tex: String): String = {
    Logger.info("Generating an image for this LaTeX:" + tex)
    val outputPdfName = "template.pdf"
    val templateFileName = "conf/template.tex"
    val templateFile = new File(templateFileName)
    assert(Files.exists(Paths.get(templateFileName)))

    val texString = "\\def\\formula{" + tex + "}\\input{" + templateFile.getAbsolutePath + "}"
    val outputImageName = "images/" + encode(tex, "UTF-8") + ".png"

    val toPdf = Process("pdflatex " + texString) !!

    Logger.info(toPdf)
    assert(Files.exists(Paths.get(outputPdfName)))

    val toPng =
      Process("convert -density 300 " + outputPdfName + " -quality 90 " + outputImageName) !!

    Logger.info(toPng)
    assert(Files.exists(Paths.get(outputImageName)))

    outputImageName
  }

}