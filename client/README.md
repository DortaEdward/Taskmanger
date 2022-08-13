    try {
      const res = await authApi.post('/login',payload);
      console.log(res.data);
      if(res.status === 200){
        await localStorage.setItem('token', res.data.token);
      };
    } catch (error) {
      actions.setError(error.response.data.error);
    };