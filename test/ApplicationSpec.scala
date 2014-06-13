import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._

import play.api.test._
import play.api.test.Helpers._
import java.net.URLEncoder.encode

/**
 * Add your spec here.
 * You can mock out a whole application including requests, plugins etc.
 * For more information, consult the wiki.
 */
@RunWith(classOf[JUnitRunner])
class ApplicationSpec extends Specification {

  "Application" should {

    val Encoding: String = "UTF-8"

    def imageCheckTest(desc: String, encodedTex: String) =
      desc in new WithApplication() {
        val anyJax = route(FakeRequest(GET, "/" + encodedTex)).get
        status(anyJax) must equalTo(OK)
        contentType(anyJax) must beSome.which(_ == "image/png")
        // contentAsString(anyJax) must contain(tex)
      }

    imageCheckTest(
      "return an image for URL-encoded valid LaTeX",
      encode("E=\\frac{m_1v^2}{2}", Encoding))

    imageCheckTest(
      "return another image for URL-encoded valid LaTeX",
      encode("\\frac{Sales}{Traffic Out}", Encoding))

    if (false) {
      imageCheckTest(
        "return another image for raw URL-encoding",
        "%5Cfrac%7BSales%7D%7BTraffic%20Out%7D")
    }

    imageCheckTest(
      "return an image for raw URL-encoding",
      "%5Cfrac%7BSales%7D%7BTrafficOut%7D")


  }
}
