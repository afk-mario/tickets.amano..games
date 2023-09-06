import PropTypes from "prop-types";
import "./styles.css";

const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
};

function Ticket({
  gems_collected: gemsCollected,
  gems_total: gemsTotal,
  created_at: createdAt,
  row_number: index,
  play_time: playTime,
}) {
  const createdAtDate = new Date(createdAt);
  const playTimeDate = new Date(null);
  playTimeDate.setSeconds(playTime);
  const playTimeS = playTimeDate.toISOString().substr(11, 8);

  return (
    <article className="c-ticket">
      <div className="c-ticket-inner">
        <span className="corner" data-corner="top-right"></span>
        <span className="corner" data-corner="top-left"></span>
        <span className="corner" data-corner="bottom-left"></span>
        <span className="corner" data-corner="bottom-right"></span>

        <div className="c-ticket-wrapper">
          <img className="logo" src="/img/logo.png" alt="Don Salmon" />
          <div
            className="birb"
            style={{
              "--index": `${(index - 1) % 31}`,
            }}
          />
          <header>
            <h2>¡Gracias por jugar!</h2>
          </header>
          <div className="info">
            <time dateTime={createdAt}>
              {createdAtDate.toLocaleDateString("es-MX", options)}
            </time>
            {playTime > 0 ? <span>{playTimeS}</span> : null}
          </div>
          <div className="info">
            <span>#{index.toString().padStart(4, "0")}</span>
            <span className="gems">
              <span>{gemsCollected.toString().padStart(3, "0")}</span>
              <span>{gemsTotal.toString().padStart(3, "0")}</span>
            </span>
          </div>
        </div>
        <div className="divider">
          <span className="cutout" data-side="left"></span>
          <hr />
          <span className="cutout" data-side="right"></span>
        </div>
        <footer>
          <img
            className="qr"
            src="/img/wishlist-qr.png"
            alt="wishlist on steam"
          />
          <span className="web">amano.games</span>
        </footer>
      </div>
    </article>
  );
}

Ticket.propTypes = {
  row_number: PropTypes.number.isRequired,
  gems_collected: PropTypes.number.isRequired,
  gems_total: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  play_time: PropTypes.number.isRequired,
};

export default Ticket;
