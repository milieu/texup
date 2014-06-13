import java.net.URLEncoder._
import org.specs2.mutable._
import org.specs2.runner._
import org.junit.runner._

import play.api.test._
import play.api.test.Helpers._

/**
 * add your integration spec here.
 * An integration test will fire up a whole play application in a real (or headless) browser
 */
@RunWith(classOf[JUnitRunner])
class IntegrationSpec extends Specification {

  "Application" should {

    if (false)
      "work from within a browser with space-including LaTeX" in new WithBrowser {

        val tex = encode("\\frac{Sales}{Traffic Out}", "UTF-8")

        val sigh = 0x89
        val pngByteHeader: List[Int] = List(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a)
        browser.goTo("http://localhost:" + port + "/" + tex)
        //      browser.pageSource must contain("�PNG")
      }

    "work from within a browser given an already URL-encoded path" in new WithBrowser {
      val urlEncodedTex = "%5Cf%0Crac%7BSales%7D%7BTraffic%20Out%7D"
      browser.goTo("http://localhost:" + port + "/" + urlEncodedTex)
      //      browser.pageSource must contain("�PNG")
    }
  }

}
