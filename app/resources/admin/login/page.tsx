export default function AdminLoginPage() {
  return (
    <div className="login-page">
      <div className="container">
        <div className="login-box">
          <p className="eyebrow">Content writer login</p>
          <h1 style={{ marginTop: 10, fontSize: 'clamp(2.1rem, 5vw, 3rem)' }}>Access the admin area</h1>
          <form>
            <label>
              Email
              <input type="email" name="email" placeholder="writer@colexa.com" />
            </label>
            <label>
              Password
              <input type="password" name="password" placeholder="••••••••" />
            </label>
            <button type="submit" className="primary-btn">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
