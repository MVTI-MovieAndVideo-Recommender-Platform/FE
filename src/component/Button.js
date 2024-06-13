export default function Button({text, onClick}) {
   return(
      //버튼 내 text-> props로 받음
      <button onClick={onClick}>
         {text} 
      </button>
   );
}