import GSTServices from "../../components/services/GSTServices";
import ITRServices from "../../components/services/ITRServices";

export default function ServicesPage() {
  return (
    <main>
      <h1>Services</h1>
      <GSTServices />
      <ITRServices />
    </main>
  );
}
