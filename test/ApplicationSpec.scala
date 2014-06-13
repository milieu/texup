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

//    "send 404 on a bad request" in new WithApplication{
//      route(FakeRequest(GET, "/boum")) must beNone
//    }
//
//    "render the index page" in new WithApplication{
//      val home = route(FakeRequest(GET, "/")).get
//
//      status(home) must equalTo(OK)
//      contentType(home) must beSome.which(_ == "text/html")
//      contentAsString(home) must contain ("Your new application is ready.")
//    }

    "return an image for valid LaTeX" in new WithApplication{
      val tex = encode("E=\\frac{m_1v^2}{2}", "UTF-8")
      val anyJax = route(FakeRequest(GET, "/"+tex)).get
      status(anyJax) must equalTo(OK)
      contentType(anyJax) must beSome.which(_ == "image/png")
      // the title must contain the tex sent over
    }

    "return another image for valid LaTeX" in new WithApplication{
      val tex = encode("\\frac{Sales}{Traffic Out}", "UTF-8")
      val anyJax = route(FakeRequest(GET, "/"+tex)).get
      status(anyJax) must equalTo(OK)
      contentType(anyJax) must beSome.which(_ == "image/png")
      // the title must contain the tex sent over
    }
  }
}
