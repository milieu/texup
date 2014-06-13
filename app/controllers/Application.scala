package controllers

import play.api._
import play.api.mvc._

import scalax.io._
import java.nio.file.{Paths, Files}
import scala.sys.process._
import java.io.File

object Application extends Controller {

  def index(tex: String) = Action {

    val outputPdfName = "template.pdf"
    val templateFileName = "conf/template.tex"
    val templateFile = new File(templateFileName)
    assert(Files.exists(Paths.get(templateFileName)))

    val texString = "\\def\\formula{" + tex + "}\\input{" + templateFile.getAbsolutePath + "}"

    val outputImageName = tex + ".png"

    val toPdf = Process("pdflatex " + texString) !!

    Logger.info(toPdf)

    val toPng = Process("convert -density 300 " + outputPdfName + " -quality 90 " + outputImageName) !!

    Logger.info(toPng)

    assert(Files.exists(Paths.get(outputImageName)))
    val outputImage: Output = Resource.fromFile(outputImageName)

    Ok.sendFile(content = new File(outputImageName), inline = true)
  }

}