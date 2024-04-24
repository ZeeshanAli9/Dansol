import React from "react";
import Container from "../Components/Container.jsx";

function WarrantyPolicy() {
  return (
    <>
      <div className="mb-28">
        <Container>
          <div>
            <div className="my-4">
              <span>Home / warranty policy</span>
            </div>
            <div>
              <p className="my-6 text-lg">
                All AR INSTRUMED products are warranted to be free from defects
                in workmanship and materials. Should any product demonstrate
                defects in workmanship or materials, it will be repaired or
                replaced at no cost. However, the customer shall bear the
                additional shipping charges associated with the use of the AR
                INSTRUMED Courier return labels and the shipment back to the
                customer, as indicated on the invoice.
              </p>
              <p className="my-6 text-lg">
                Regarding staining of the instruments, it is important to note
                that staining is a surface deposit that is often mistaken for
                rust. While it is rare for instruments to rust, staining may
                occur after autoclaving. Stains can appear in various colors,
                which can indicate the origin of the stain. We provide
                suggestions on how to avoid staining in the instrument care
                sections of the AR INSTRUMED website and catalog.
              </p>
              <p className="my-6 text-lg">
                This warranty does not cover normal wear and tear or the use of
                instruments beyond their intended limitations. Additionally, it
                excludes the improper usage of an instrument, wherein it is used
                in a manner inconsistent with its intended design and purpose.
                Furthermore, instruments that have been damaged through abusive
                or accidental means are not covered by this warranty.
              </p>
              <p className="my-6 text-lg">
                It is important to adhere to proper storage and sterilization
                procedures as outlined in the Instrument Care sections of the AR
                INSTRUMED website and catalog. Failure to store and sterilize
                the instruments correctly may void the warranty. Additionally,
                any modifications, alterations, or sharpening performed on AR
                INSTRUMED instruments will result in the revocation of the
                warranty.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default WarrantyPolicy;
