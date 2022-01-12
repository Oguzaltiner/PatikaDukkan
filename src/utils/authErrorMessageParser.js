export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'geçersiz e-posta adresi';
    case 'auth/email-already-exists':
      return 'kullanıcı kayıtlı';
    case 'auth/user-not-found':
      return 'kullanıcı yok';
      case 'auth/weak-password':
        return 'parola zayıf';
        case 'auth/wrong-password':
            return 'parola geçersiz';
    default:
      break;
  }
}
