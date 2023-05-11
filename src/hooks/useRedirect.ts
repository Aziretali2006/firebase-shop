
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../service/Path';

const useRedirect = () => {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => navigate(PATH.connectedAuthPath.login) , [navigate]);
  const goToMain = React.useCallback(() => navigate(PATH.connectedAuthPath.layout) , [navigate]);
  const goToProfile = React.useCallback(() => navigate(PATH.connectedAuthPath.profile) , [navigate]);
  const goToAdmin = React.useCallback(() => navigate(PATH.AdminPath.admin) , [navigate])

  return {
    actions: {
      goToLogin,
      goToMain,
      goToProfile,
      goToAdmin
    }
  }
}

export default useRedirect;
