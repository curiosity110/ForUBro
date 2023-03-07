import "./styles.css";

function Footer(props) {
  return <footer className="footer">{props.children} {props.copyright}</footer>;
}

export default Footer;
