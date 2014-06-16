import play.api._
import play.api.mvc._
import play.api.mvc.Results._
import play.api.templates.Html
import scala.concurrent.Future
import scalax.file.Path

object Global extends GlobalSettings {
  override def onHandlerNotFound(request: RequestHeader) = {
    Future.successful(NotFound(
      views.html.main("404: Not Found")(
        new Html(
          new StringBuilder(
            "(URL-decoded) bad LaTeX? " + java.net.URLDecoder.decode(request.path, "UTF-8") +
              "<br><a href=\"" + request.host + "/\">Help</a>")))
    ))
  }

  override def onStart(app: Application) {
    Path("images").createDirectory(failIfExists = false)
    Logger.info("Application has started")
  }

  override def onStop(app: Application) {
    Logger.info("Application shutdown...")
  }

}
