// ====== ĐIỀN THÔNG TIN CỦA BẠN Ở ĐÂY ======
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
export const cfg={apiKey: "AIzaSyBZgDQnv1peiX5Ox0EG-BIVLODj1hy-pkY",
  authDomain: "atvoice-3a6f4.firebaseapp.com",
  projectId: "atvoice-3a6f4",
  storageBucket: "atvoice-3a6f4.firebasestorage.app",
  messagingSenderId: "1049806756969",
  appId: "1:1049806756969:web:3847d02b7cdbc5dcd816f8",
  measurementId: "G-Q64X9GFP1C"};
export const ADMIN_EMAIL="at.huflit@gmail.com";
export const CLOUDINARY={cloud:"",preset:""}; // để trống nếu chỉ dán link
export const app=initializeApp(cfg);
export const db=getFirestore(app), auth=getAuth(app);
export const yt=u=>((u||"").match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/)||[])[1];
export const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
// Nội dung mặc định: hiển thị khi Firestore chưa có dữ liệu. Admin sẽ ghi đè các mục này.
export const DEFAULTS={name:"Nguyễn Anh Tú",role:"Voice Talent giọng nam",tagline:"Voice Talent giọng nam - TVC, phim doanh nghiệp, game, podcast",
about:"Giọng nói là linh hồn của mọi sản phẩm truyền thông. Tôi mang đến giọng đọc trầm ấm, giàu cảm xúc và linh hoạt theo từng tone & mood.",
exp:"TVC/iTVC\nPhim doanh nghiệp\nQuảng cáo phát loa\nThuyết minh phim\nTrailer game\nPodcast",
skills:"Tư duy ngữ điệu, cảm âm tốt, linh hoạt\nThành thạo Adobe Audition\nMicro chuyên dụng\nStudio chuyên nghiệp\nSẵn sàng thu remote/onsite",
phone:"0900000000",zalo:"0900000000",email:"email@example.com",facebook:"https://facebook.com/"};
