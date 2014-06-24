package filters

import play.api.mvc._
import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global

object AddResponseHeader extends Filter {
  def apply(f: (RequestHeader) => Future[SimpleResult])(rh: RequestHeader): Future[SimpleResult] = {
    val result = f(rh)
    result.map(_.withHeaders(
      "Access-Control-Allow-Origin" -> "*",
      "Access-Control-Allow-Methods" -> "GET, POST, OPTIONS, DELETE, PUT",
      "Access-Control-Max-Age" -> "3600",
      "Access-Control-Allow-Headers" -> "Origin, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Credentials" -> "true"
    ))
  }
}