import Link from "next/link";

export default function Header() {
  return (
    <header className=" flex flex-row p-4 justify-between">
      <div>
        <Link href="/">
          <a className="btn btn-link">BeenBlog</a>
        </Link>
      </div>
      <div>
        <Link href="/introduce">
          <a className="btn btn-link">Introduce</a>
        </Link>
        <Link href="/order">
          <a className="btn btn-link">Order</a>
        </Link>
        <Link href="/hiring">
          <a className="btn btn-link">Hiring</a>
        </Link>
        <Link href="/contact">
          <a className="btn btn-link"> Contact Us</a>
        </Link>
      </div>
    </header>
  );
}
