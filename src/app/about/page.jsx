import FirmProfile from "../../components/about/FirmProfile";
import Credentials from "../../components/about/Credentials";
import ExperienceAndRegistrations from "../../components/about/ExperienceAndRegistrations";

export default function AboutPage() {
  return (
    <main>
      <h1>About Us</h1>
      <FirmProfile />
      <Credentials />
      <ExperienceAndRegistrations />
    </main>
  );
}
