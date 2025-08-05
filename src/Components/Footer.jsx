import React from "react";
function Footer() {
  return (
    <footer className="bg-third-background p-25 pb-8 flex gap-18">
      <section>
        <img src="/public/assets/footer-logo.png" alt="footer logo" />
        <p className="text-sm mt-6 w-4/5">
          We only deliver to Cairo & Giza (except Friday, Saturday and Holidays)
        </p>
      </section>
      <section>
        <h3 className="mb-6 text-primary text-2xl font-medium ">Delivery</h3>
        <div className="flex flex-col gap-4">
          <p className="text-sm">
            We only deliver to Cairo & Giza (except Friday, Saturday and
            Holidays)
          </p>
          <h4>Within 24 hrs :</h4>
          <ul className="list-disc">
            <li>New Cairo & Heliopolis</li>
            <li>Sheikh Zayed & October</li>
          </ul>
          <p>Other zones delivery within 48hrs.</p>
        </div>
      </section>
      <section>
        <img src="/public/assets/footer-logo.png" alt="footer logo" />
        <p className="text-sm">
          We only deliver to Cairo & Giza (except Friday, Saturday and Holidays)
        </p>
      </section>
      <section>
        <img src="/public/assets/footer-logo.png" alt="footer logo" />
        <p className="text-sm">
          We only deliver to Cairo & Giza (except Friday, Saturday and Holidays)
        </p>
      </section>
    </footer>
  );
}

export default Footer;
