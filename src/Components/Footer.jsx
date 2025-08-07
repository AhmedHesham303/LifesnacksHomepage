import React from "react";
function Footer() {
  return (
    <footer className="bg-third-background p-25 pb-8  font-light">
      <div className="flex gap-16 mb-22">
        <section>
          <img src="/public/assets/footer-logo.png" alt="footer logo" />
          <p className="text-sm mt-6 w-4/5">
            We only deliver to Cairo & Giza (except Friday, Saturday and
            Holidays)
          </p>
        </section>
        <section>
          <h3 className="mb-6 text-primary text-2xl font-medium ">Delivery</h3>
          <div className="flex flex-col gap-4 w-5/6">
            <p className="text-sm ">
              We only deliver to Cairo & Giza (except Friday, Saturday and
              Holidays)
            </p>
            <h4 className="font-medium">Within 24 hrs :</h4>
            <ul className="list-disc list-inside marker:text-sm">
              <li>New Cairo & Heliopolis</li>
              <li>Sheikh Zayed & October</li>
            </ul>
            <p>Other zones delivery within 48hrs.</p>
          </div>
        </section>
        <section>
          <h3 className="mb-4 text-primary text-2xl font-medium ">
            Social Media
          </h3>
          <p className="text-sm mb-7">Follow us on social media platforms. </p>
          <div className="grid grid-cols-2 gap-x-14 gap-y-4">
            <div>
              <p className="mb-4 font-medium">Wunder</p>
              <div className="flex gap-4">
                <a href="#">
                  <img src="/assets/facebook-icon.svg" alt="facebook icon" />
                </a>
                <a href="#">
                  <img src="/assets/insta-icon.svg" alt="facebook icon" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-4 font-medium">Scrunch</p>
              <div className="flex gap-4">
                <a href="#">
                  <img src="/assets/facebook-icon.svg" alt="facebook icon" />
                </a>
                <a href="#">
                  <img src="/assets/insta-icon.svg" alt="facebook icon" />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-4 font-medium">Bake At Home</p>
              <div className="flex gap-4">
                <a href="#">
                  <img src="/assets/facebook-icon.svg" alt="facebook icon" />
                </a>
                <a href="#">
                  <img src="/assets/insta-icon.svg" alt="facebook icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p className="mb-9 text-primary text-2xl font-medium">Contact us</p>
          <div className="flex flex-col gap-6 text-sm">
            <a href="#" className="flex gap-3 items-start">
              <img
                src="/public/assets/location-icon.svg"
                alt="location icon"
                className="w-6 h-6"
              />
              <p>Address: Factory #313 Industrial ZoneThird Settlement,</p>
            </a>
            <a href="#" className="flex gap-3 items-start">
              <img
                src="/public/assets/phone-icon.svg"
                alt="phone icon"
                className="w-6 h-6"
              />
              <p>(+20) 102 010-0045</p>
            </a>
            <a href="#" className="flex gap-3 items-start">
              <img
                src="/public/assets/email-icon.svg"
                alt="email icon"
                className="w-6 h-6"
              />
              <p>customercare@lifesnacks.me</p>
            </a>
          </div>
        </section>
      </div>
      <section className="flex justify-between">
        <div className="flex gap-2.5 text-sm ">
          <p>2024 @ all copyright reserved</p>
          <span>-</span>
          <p>© 2024 Proudly Powered by O-Projects</p>
        </div>
        <div className="flex gap-6 text-sm text-[#615E6F] underline">
          <a href="#">Terms & condition</a>
          <a href="#">Privace Policy</a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
