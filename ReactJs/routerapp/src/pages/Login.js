const Login = () => {
    return (
      <div className="bg-light d-flex justify-content-center align-items-center min-vh-100">
        <div className="container">
          <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
            <div className="card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                  <a href="#" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
              <div className="text-center mt-3">
                <p>
                  Don't have an account? <a href="#" className="text-decoration-none">Sign up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;