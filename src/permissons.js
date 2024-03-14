import Cookies from 'js-cookie';
// permissions.js
export function hasAnyPermission(user, ...permissions) {
  return user?.role?.permissions?.some(permission => permissions.includes(permission.name));
}

export function hasAnyPermissionwithout( ...permissions) {
    const userCookieadmin = Cookies?.get('user');
    const useradmin = userCookieadmin ? JSON.parse(userCookieadmin) : undefined;
    return useradmin?.role?.permissions?.some(permission => permissions.includes(permission.name));
  }
  