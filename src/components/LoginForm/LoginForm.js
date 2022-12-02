export const LoginForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" 
        //   value={email} onChange={handleEmailInputChange}
        />
        </label>
        <label>
          Password
          <input type="password" name="password" 
        //   value={password} onChange={handlePasswordInputChange}
        />
        </label>
        <button type="submit">Signup</button>
      </form>
    );
        
};