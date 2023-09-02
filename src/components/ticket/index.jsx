import PropTypes from "prop-types";
import "./styles.css";

function Ticket({
  index,
  gems_collected: gemsCollected,
  gems_total: gemsTotal,
}) {
  return (
    <article className="c-ticket">
      <div
        className="birb"
        style={{
          "--index": `${index % 31}`,
        }}
      />
      <header>
        <h2>¡Gracias por jugar!</h2>
      </header>
      <div className="info">
        <span>#{(index + 1).toString().padStart(4, "0")}</span>
        <span className="gems">
          <span>{gemsCollected.toString().padStart(3, "0")}</span>
          <span>{gemsTotal.toString().padStart(3, "0")}</span>
        </span>
      </div>
      <footer>
        <img
          className="qr"
          src="/img/wishlist-qr.png"
          alt="wishlist on steam"
        />
        <span>
          <a href="https://amano.games">amano.games</a>
        </span>
      </footer>
    </article>
  );
}

Ticket.propTypes = {
  index: PropTypes.number.isRequired,
  gems_collected: PropTypes.number.isRequired,
  gems_total: PropTypes.number.isRequired,
};

export default Ticket;
