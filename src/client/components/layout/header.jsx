export default function Header() {
  return (
    <header className="bg-white shadow-sm p-3 border-bottom">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Convocados</a></li>
          <li class="breadcrumb-item active" aria-current="page">Colombia</li>
        </ol>
      </nav>
    </header>
  );
}