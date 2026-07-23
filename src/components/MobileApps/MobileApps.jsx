import baby from "../../assets/images/Baby.png";
import barcode from "../../assets/images/barcode.png";
import mobile from "../../assets/images/mobile.png";
import points from "../../assets/images/points.png";
import steeringWheel from "../../assets/images/SteeringWheel.png";
import student from "../../assets/images/student.png";
import "./MobileApps.css";

const apps = [
  { title: "School Branded Admin App", icon: points, alt: "Admin app" },
  { title: "Parent & Student App", icon: baby, alt: "Parent and student app" },
  { title: "Teacher App", icon: student, alt: "Teacher app" },
  { title: "QR Attendance App", icon: barcode, alt: "QR attendance app" },
  { title: "Driver App", icon: steeringWheel, alt: "Driver app" },
];

function MobileApps() {
  return (
    <section className="mobile-apps" id="apps">
      <div className="mobile-container">
        <div className="mobile-image reveal-item">
          <img src={mobile} alt="DIT School mobile app" />
        </div>

        <div className="mobile-content reveal-item">
          <div className="content-top">
            <h2>Mobile & Branded Apps</h2>
            <p>
              Manage your school anytime, anywhere! DIT School ERP comes with
              powerful mobile apps for admins, teachers, students, and parents.
            </p>
          </div>

          <div className="app-list">
            {apps.map((app) => (
              <div className="app-item" key={app.title}>
                <img src={app.icon} alt={app.alt} />
                <span>{app.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileApps;
