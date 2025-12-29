export const cupWelcLoaderHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body {
          margin: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }

        .loader {
          width: 100px;
          height: 80px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cup {
          position: absolute;
          width: 25px;
          height: 18px;
          background-color: #ffffff;
          border: 1px solid #2e2e2e;
          border-radius: 2px 2px 10px 10px;
          animation: expansion 6s infinite ease-in-out;
          transform-origin: center;
        }

        .cup::after {
          content: "";
          position: absolute;
          top: -2px;
          width: calc(100% - 2px);
          height: 2px;
          background: #fed59fca;
          border: 1px solid #2e2e2ebe;
          border-radius: 50%;
        }

        .cup::before {
          content: "";
          position: absolute;
          top: 15px;
          width: calc(100% - 2px);
          height: 4px;
          border: 1px solid #2e2e2e;
          border-top: none;
          border-radius: 50%;
        }

        .cup-handle {
          position: absolute;
          width: 5px;
          height: 10px;
          background-color: #fff;
          border: 1px solid #2e2e2e;
          right: -5px;
          top: 2px;
          border-radius: 2px 10px 20px 2px;
        }

        .smoke {
          position: absolute;
          bottom: 100%;
          left: 50%;
          width: 15px;
          height: 25px;
          background: rgba(107, 102, 102, 0.43);
          border-radius: 50%;
          transform: translateX(-50%);
          animation: rise 6s infinite ease-in-out;
          filter: blur(8px);
        }

        .smoke.one { animation-delay: 0s; }
        .smoke.two { animation-delay: 1s; }
        .smoke.three { animation-delay: 2s; }

        .load {
          position: absolute;
          font-size: 10px;
          opacity: 0.6;
          top: 45%;
          left: 50%;
          transform: translateX(-50%);
          letter-spacing: 2px;
        }

        @keyframes expansion {
          0% { width: 25px; transform: translateX(0); }
          40% { width: 100px; transform: translateX(0); }
          80% { width: 25px; transform: translateX(64px); }
          90% { width: 100px; transform: translateX(0); }
          100% { width: 25px; transform: translateX(0); }
        }

        @keyframes rise {
          0% { transform: translate(-50%, 0) scale(0.4); opacity: 0; }
          30% { opacity: 0.7; }
          60% { opacity: 0.4; }
          100% { transform: translate(-50%, -120px) scale(1); opacity: 0; }
        }
      </style>
    </head>
    <body>
      <div class="loader">
        <div class="cup">
          <div class="cup-handle"></div>
          <div class="smoke one"></div>
          <div class="smoke two"></div>
          <div class="smoke three"></div>
        </div>
        <div class="load">.........................</div>
      </div>
    </body>
  </html>
  `;
