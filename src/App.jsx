import groupIcon from "./assets/groupicons.jpeg";
import trainer from "./assets/trainer.avif";
import nezeriyye from "./assets/nezeriyye.png";
import experience from "./assets/experience.png";
import exam from "./assets/exam.png";
import visual from "./assets/onlineandvusial.png";
import second from "./assets/record.png";
import first from "./assets/zemanet.png";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="icon">
          <img src={groupIcon} alt="Kiçik Qruplar" />
        </div>
        <h3>Kiçik Qruplar</h3>
        <p>Dərslər kiçik qruplarda keçirilir, qruplarda 4-7 tələbə olur.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={trainer} alt="Təcrübəli Təlimçilər" />
        </div>
        <h3>Təcrübəli Təlimçilər</h3>
        <p>
          Çox peşəkar və təcrübəli təlimçilərdən dərin biliklər əldə
          edəcəksiniz.
        </p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={nezeriyye} alt="Nəzəriyyə + Praktika" />
        </div>
        <h3>Nəzəriyyə + Praktika</h3>
        <p>Hər gün tədris + praktiki məşğələ metodu ilə öyrənəcəksiniz.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={experience} alt="Təcrübə proqramı" />
        </div>
        <h3>Təcrübə proqramı və Karyera dəstəyi</h3>
        <p>Bitirdikdən sonra şirkətlərə yönləndirilirsiniz.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={exam} alt="Ödənişsiz Sınaq Dərsləri" />
        </div>
        <h3>Ödənişsiz Sınaq Dərsləri</h3>
        <p>İlk dərslər tam ödənişsiz təqdim olunur.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={visual} alt="Əyani və Online dərslər" />
        </div>
        <h3>Əyani və Online dərslər</h3>
        <p>Dərslərə əyani və ya onlayn şəkildə qoşula bilərsiniz.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={second} alt="Dərslərin Video Yazıları" />
        </div>
        <h3>Dərslərin Video Yazıları</h3>
        <p>Dərslərin video yazılarını əldə edib təkrar baxa bilərsiniz.</p>
      </div>

      <div className="card">
        <div className="icon">
          <img src={first} alt="Zəmanət Veririk" />
        </div>
        <h3>Zəmanət Veririk</h3>
        <p>Aydın olmayan mövzuları yenidən izah edirik.</p>
      </div>
    </div>
  );
}
