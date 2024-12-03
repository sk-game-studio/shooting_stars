window.onload = function() {
  // 주식 그래프 그리기
  const stockCanvas = document.getElementById('stockGraph');
  const stockCtx = stockCanvas.getContext('2d');

  // 예시로 간단한 선 그래프 그리기
  stockCtx.beginPath();
  stockCtx.moveTo(10, 140);
  stockCtx.lineTo(50, 100);
  stockCtx.lineTo(90, 120);
  stockCtx.lineTo(130, 80);
  stockCtx.lineTo(170, 100);
  stockCtx.lineTo(210, 60);
  stockCtx.lineTo(250, 80);
  stockCtx.strokeStyle = '#00f';
  stockCtx.stroke();

  // 텍스트 추가
  stockCtx.font = '16px Arial';
  stockCtx.fillText('현재 주가: $3.15 +0.15', 10, 20);

  // 시계 그리기
  const clockCanvas = document.getElementById('clock');
  const clockCtx = clockCanvas.getContext('2d');

  function drawClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      clockCtx.clearRect(0, 0, clockCanvas.width, clockCanvas.height);

      // 원 그리기
      clockCtx.beginPath();
      clockCtx.arc(75, 75, 70, 0, 2 * Math.PI);
      clockCtx.stroke();

      // 시침
      clockCtx.beginPath();
      clockCtx.moveTo(75, 75);
      clockCtx.lineTo(75 + 30 * Math.cos((Math.PI / 6) * (hours % 12 + minutes / 60) - Math.PI / 2), 
                      75 + 30 * Math.sin((Math.PI / 6) * (hours % 12 + minutes / 60) - Math.PI / 2));
      clockCtx.stroke();

      // 분침
      clockCtx.beginPath();
      clockCtx.moveTo(75, 75);
      clockCtx.lineTo(75 + 50 * Math.cos((Math.PI / 30) * minutes - Math.PI / 2), 
                      75 + 50 * Math.sin((Math.PI / 30) * minutes - Math.PI / 2));
      clockCtx.stroke();

      // 초침
      clockCtx.beginPath();
      clockCtx.moveTo(75, 75);
      clockCtx.lineTo(75 + 60 * Math.cos((Math.PI / 30) * seconds - Math.PI / 2), 
                      75 + 60 * Math.sin((Math.PI / 30) * seconds - Math.PI / 2));
      clockCtx.strokeStyle = 'red';
      clockCtx.stroke();
  }

  setInterval(drawClock, 1000);
  drawClock(); // 초기 호출
};