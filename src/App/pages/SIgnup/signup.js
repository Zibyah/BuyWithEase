export const signupUser = async (username, password, retypepassword) => {
    const resp = await
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username,
              password,
              retypepassword,
              // expiresInMins: 60, // optional
            })
          })
          if (resp.status == 200){
            throw Error ('Invalid')
          }
          return resp.json()        
    } 
    