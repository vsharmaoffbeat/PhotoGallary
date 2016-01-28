using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PhotoGallaryWithAngular.Controllers
{
    public class PhotoGallaryController : Controller
    {
        //
        // GET: /PhotoGallary/

        public ActionResult Index()
        {
            return View();
        }

    }
}
