/* ============================================================
   Techcombank Mobile Revamp: hero journey + wireframes
   Visual language: Techcombank Mobile AI-First Redesign (Round 3)
   ============================================================ */

const P = (n, cls = "") => '<b class="pin ' + cls + '">' + n + "</b>";
const im = (n, cls = "d3", st = "") => '<img class="' + cls + '" src="assets/' + n + '" alt=""' + (st ? ' style="' + st + '"' : "") + ">";
const LOGO = "assets/logo-new.svg";

const sb = () =>
  '<div class="sb"><span>9:41</span><span class="ic"><img src="assets/cellular.svg" alt=""><img src="assets/wifi.svg" alt=""><img src="assets/battery.svg" alt=""></span></div>';
const tbar = () =>
  '<div class="tbar"><img class="logo" src="' + LOGO + '" alt=""><span class="cbtn"><i class="ri-notification-3-line"></i></span><span class="cbtn"><i class="ri-search-line"></i></span></div>';
const bb = (t = "Hỏi bất cứ điều gì...", pin = "") =>
  '<div class="bb rel">' + pin + '<span class="bb-menu"><img src="assets/menu.svg" alt=""></span><span class="bb-ask" data-go="ai"><span>' + t + '</span><img src="' + LOGO + '" alt=""></span></div>';
const back = (go, title, right = "") =>
  '<div class="hdr"><span class="cbtn" data-go="' + go + '"><i class="ri-arrow-left-line"></i></span><h5>' + title + "</h5>" + right + "</div>";
const ruler = (on, labels) => {
  let t = "";
  for (let i = 0; i <= 20; i++) t += '<i class="' + (i <= on ? "on " : "") + (i % 10 === 0 ? "big" : "") + '"></i>';
  return '<div class="ruler"><div class="lb"><span>' + labels[0] + "</span><em>" + labels[1] + "</em><span>" + labels[2] + '</span></div><div class="tk">' + t + "</div></div>";
};
const strip = () => `
  <div class="row sp sm"><b>Tháng lương của bạn</b><span class="dim xs" data-go="cal">Xem lịch</span></div>
  <div class="strip">
    <i class="d now" style="left:3%"></i><i class="d dbill" style="left:20%"></i><i class="d dbill" style="left:26%"></i><i class="d dcard" style="left:34%"></i><i class="d doffer" style="left:47%"></i><i class="d dbill" style="left:52%"></i><i class="d dbill" style="left:68%"></i><i class="d" style="left:99%"></i>
    <span class="lbl" style="left:5%">Hôm nay</span><span class="lbl" style="left:34%">Thẻ 15/10</span><span class="lbl" style="left:68%">Điện nước</span><span class="lbl" style="left:94%">Lương</span>
  </div>`;
const promo = (pin = "") => `
  <div class="promo rel" data-go="split">${pin}
    <b>Lương tháng 10 đã về</b><div class="amt-big">+18,500,000</div>
    <p>Kế hoạch chia lương giống tháng 9 đã sẵn sàng.</p>
    <span class="pill k" style="margin-top:12px">Chia lương</span>${im("banner-piggy.png", "")}
  </div>`;

/* Insight sheet, shared by the payday view and the look-back view */
const insightSheet = (v) => {
  const late = v === "late";
  return `
  <div class="scr">
    <div class="sheet-top">${sb()}
      <div class="ins-grid">
        <div class="w-goal rel">${P(1, "in")}
          <div class="t">Mục tiêu Du lịch Đà Lạt</div><div class="p">75%</div><div class="s">Còn 2 kỳ lương nữa là đủ</div>
          <span class="icn">${im("tri-suggestion-plane.png", "")}</span>
          ${ruler(15, ["0", "7.5M", "10M"])}
        </div>
        ${late
          ? `<div class="w rel">${P(2)}<div class="t">Có thể chi</div><div class="v">320k</div><div class="s">đến ngày lương, ngày mai</div><span class="icn" style="background:#d9f99d">${im("insight-wallet.png", "")}</span></div>
             <div class="w"><div class="t">Ăn uống</div><div class="v" style="color:#ed1c24">5,4m <span>/ 4,5m</span></div><div class="s">vượt ngân sách tháng</div><span class="icn" style="background:#fef08a">${im("insight-cash.png", "")}</span></div>
             <div class="w fresh rel">${P(3, "l")}<span class="new-b">Mới từ AI</span><div class="t">Bạn đã chi</div><div class="v">1,4m</div><div class="s">cho cà phê tháng này, 19 lần</div><span class="icn" style="background:#ede9fe">${im("insight-coffee-3d.png", "")}</span></div>
             <div class="w add" data-go="ai"><img src="${LOGO}" alt="">Thêm insight mới</div>`
          : `<div class="w rel">${P(2)}<div class="t">Có thể chi</div><div class="v">5,0m</div><div class="s">đến 5/11, sau hóa đơn và tiết kiệm</div><span class="icn" style="background:#d9f99d">${im("insight-wallet.png", "")}</span></div>
             <div class="w"><div class="t">Bạn đã chi</div><div class="v">0 <span>/ 4,5m</span></div><div class="s">ngân sách ăn uống, kỳ mới</div><span class="icn" style="background:#fef08a">${im("insight-cash.png", "")}</span></div>
             <div class="w"><div class="t">Quỹ khẩn cấp</div><div class="v">8m</div><div class="s">đủ cho khoảng 1,5 tháng</div><span class="icn" style="background:#fecaca">${im("banner-piggy.png", "")}</span></div>
             <div class="w add rel" data-go="ai">${P(3, "l")}<img src="${LOGO}" alt="">Thêm insight mới</div>`}
      </div>
      <div class="sheet-acts rel">${P(4, "l")}<span class="pill o">Sửa</span><span class="pill k" data-go="${late ? "insight" : "home"}">Đóng</span></div>
    </div>
    <div class="ins-under">${bb()}</div>
    ${late ? '<div class="toast"><img src="' + LOGO + '" alt="">Đã thêm insight Cà phê<span style="color:#8b5cf6">Hoàn tác</span></div>' : ""}
  </div>`;
};

/* ---------- Journey moments ---------- */
const MOMENTS = [
  {
    n: 1, day: "Ngày 5", title: "Lương về",
    desc: "Dòng tiền lớn nhất trong tháng đến tài khoản.",
    caps: ["Salary Account"],
    doing: "Nhận lương từ Công ty B, mở app kiểm tra số dư.",
    feel: "“Lương về rồi, nhẹ cả người.”",
    pain: "Thông báo chỉ báo biến động số dư. Việc cần làm tiếp theo nằm trong đầu khách hàng.",
    opp: ["Thông báo lương kèm sẵn kế hoạch chia tiền", "Số dư vẫn ở trung tâm, thêm dòng “Có thể chi”", "Insight ngay dưới số dư, một chạm là thấy"],
    now: 0.88, next: 0.92,
  },
  {
    n: 2, day: "Ngày 5–6", title: "Phân bổ",
    desc: "Chuyển về ngân hàng chính, giữ lại để chi tiêu, trích tiết kiệm.",
    caps: ["Savings & Goals"],
    doing: "Chuyển phần lớn sang ngân hàng chính, giữ một khoản tại TCB, gửi tiết kiệm.",
    feel: "“Lại phải chuyển tay từng khoản.”",
    pain: "Mỗi tháng làm lại 4–5 lệnh, nhập lại tài khoản, xác thực nhiều lần.",
    opp: ["Chia lương: 5 lệnh, 1 lần xác thực", "Tự lặp lại mỗi kỳ lương", "Mục tiêu tiết kiệm có lời nhắn cho người thân"],
    now: 0.62, next: 0.9,
  },
  {
    n: 3, day: "Ngày 6–24", title: "Chi tiêu hằng ngày",
    desc: "QR, chuyển khoản, ưu đãi, hóa đơn định kỳ.",
    caps: ["Daily Spend & Lifestyle", "Rewards", "Bill Hub"],
    doing: "Quét QR ăn uống, chuyển tiền cho gia đình, trả điện nước, internet, học phí.",
    feel: "“Ưu đãi ở đâu nhỉ? Hóa đơn này trả chưa?”",
    pain: "Ưu đãi tản mát nhiều nơi. Hóa đơn mỗi cái một chỗ. Chuyển tiền nhiều bước.",
    opp: ["Lệnh bằng lời nói hoặc copy số tài khoản", "Ưu đãi hiện ngay trong luồng QR", "Lịch tài chính từ kỳ lương đến kỳ lương"],
    now: 0.55, next: 0.8,
  },
  {
    n: 4, day: "Ngày 24–4", title: "Áp lực cuối tháng",
    desc: "Số dư giảm, nhu cầu chi vẫn còn.",
    caps: ["Credit Card Onboarding & Usage"],
    doing: "Thấy số dư thấp, bắt đầu dùng thẻ tín dụng để bù.",
    feel: "“Mình tiêu cái gì mà khiếp thế?”",
    pain: "Chỉ biết hết tiền khi đã hết. Thẻ tín dụng được chào bán không đúng lúc.",
    opp: ["Dự báo thiếu hụt trước 10 ngày", "3 phương án kèm hệ quả rõ ràng", "Thẻ tín dụng như cầu nối, có giới hạn an toàn"],
    now: 0.14, next: 0.62,
  },
  {
    n: 5, day: "Ngày 4", title: "Nhìn lại tháng",
    desc: "Muốn hiểu và kiểm soát tốt hơn cho tháng sau.",
    caps: ["Spending Control (PFM)"],
    doing: "Lướt lịch sử giao dịch, cố đoán tiền đã đi đâu.",
    feel: "“Tháng này mình đã tiêu tiền vào đâu mà hết nhanh như vậy?”",
    pain: "Lịch sử là một danh sách dài. Không trả lời được câu hỏi “tiền đi đâu”.",
    opp: ["Recap tháng dạng story", "Hỏi AI, rồi biến câu trả lời thành insight trên Home", "Gợi ý áp dụng thẳng vào kế hoạch tháng sau"],
    now: 0.3, next: 0.86,
  },
];

/* ---------- Screens ---------- */
const SCREENS = [
  /* ===== 1. Lương về ===== */
  {
    id: "lock", m: 1, name: "Thông báo lương",
    why: "Ngày lương là lúc khách hàng mở app nhiều nhất. Biến thông báo biến động số dư thành điểm bắt đầu của cả kế hoạch tháng.",
    tags: [["auto", "Auto-action"], ["ctx", "Contextual"]],
    notes: [
      "Widget màn hình khóa hiển thị số tiền có thể chi đến kỳ lương sau, bên cạnh số dư trong app.",
      "Thông báo lương có sẵn hai hành động. Kế hoạch chia lương tháng trước đã được chuẩn bị lại.",
    ],
    html: () => `
      <div class="scr lock">${sb()}
        <div class="lk-date">Thứ Hai, 5 tháng 10</div>
        <div class="lk-time">8:02</div>
        <div class="lk-widget rel">${P(1)}<span>Có thể chi đến 5/11</span><b>5,000,000</b><div class="bar"><i style="width:100%"></i></div></div>
        <div class="lk-notif rel" data-go="home">${P(2)}
          <div class="n-head"><span class="n-app"><img src="${LOGO}" alt=""></span><span>Techcombank</span><span class="n-time">bây giờ</span></div>
          <b>Lương tháng 10 đã về: +18,500,000 VND</b>
          <p>Kế hoạch chia lương giống tháng 9 đã sẵn sàng. Xem lại và xác nhận một lần.</p>
          <div class="n-acts"><span>Để sau</span><span>Xem kế hoạch</span></div>
        </div>
        <div class="lk-bottom"><i class="ri-flashlight-fill"></i><i class="ri-camera-fill"></i></div>
      </div>`,
  },
  {
    id: "home", m: 1, name: "Home ngày lương",
    why: "Home vẫn là app ngân hàng: số dư ở trung tâm, thao tác quen thuộc ngay bên dưới. Ngày lương chỉ thêm một thẻ “Dành cho bạn”, không thay chỗ của số dư.",
    tags: [["new", "Từ bản AI-First"], ["ctx", "Contextual"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Số dư hiện tại vẫn là con số lớn nhất, đặt giữa màn hình, có nút ẩn hiện.",
      "Dòng “Có thể chi đến 5/11” nằm dưới số dư như một gợi ý thêm. “Vì sao?” mở ra phép tính.",
      "Nút Insight ngay dưới số dư. Một chạm mở bảng widget tài chính.",
      "Thẻ ngày lương trong “Dành cho bạn”: chỉ hiện vào ngày lương, tự ẩn sau khi chia xong.",
      "Dải tháng lương từ ngày 5 đến ngày 4. Khách hàng biết mình đang ở đâu và sắp phải trả gì.",
    ],
    html: () => `
      <div class="scr">${sb()}${tbar()}
        <div class="body" style="gap:12px">
          <div class="bal-c rel">${P(1)}
            <div class="lab">Số dư hiện tại</div>
            <div class="amt"><span class="cur">VND</span>23,350,000<img src="assets/visibility.svg" alt=""></div>
            <div class="safe rel">${P(2)}Có thể chi đến 5/11: <b style="color:#fff">5,000,000</b><span class="why-chip">Vì sao?</span></div>
            <span class="ins-pill rel" data-go="bins">${P(3)}<img src="${LOGO}" alt="">Insight</span>
          </div>
          <div class="acts">
            <span>${im("banner-piggy.png")}Tiết kiệm</span><span>${im("action-transfer.png")}Chuyển tiền</span><span data-go="qr">${im("action-qr.png")}Quét QR</span><span>${im("action-paybills.png")}Hóa đơn</span><span class="more"><i class="ri-arrow-right-line"></i></span>
          </div>
          <div class="feed-h">Dành cho bạn</div>
          ${promo(P(4))}
          <div class="strip-card rel">${P(5, "l")}${strip()}</div>
        </div>
        ${bb("“Chia lương giống tháng trước nhé”")}
      </div>`,
  },
  {
    id: "bins", m: 1, name: "Insight số dư",
    why: "Mang lại tính năng Insight từ bản AI-First. Chạm Insight dưới số dư, một bảng widget trượt xuống, trả lời ngay “mình đang ổn không” mà không phải rời Home.",
    tags: [["new", "Từ bản AI-First"], ["ctx", "Contextual"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Mục tiêu lớn nhất nằm trên cùng, với thước đo tiến độ. Ngày lương là lúc mục tiêu vừa được nạp thêm.",
      "Mỗi widget một con số và một câu giải thích: có thể chi, ngân sách ăn uống, quỹ khẩn cấp.",
      "“Thêm insight mới” mở trợ lý AI. Khách hàng tự yêu cầu insight mình cần, bằng lời của mình.",
      "Sửa để ẩn hoặc sắp xếp widget. Đóng để quay về Home, Home vẫn mờ phía sau để giữ ngữ cảnh.",
    ],
    html: () => insightSheet("payday"),
  },

  /* ===== 2. Phân bổ ===== */
  {
    id: "split", m: 2, name: "Kế hoạch chia lương",
    why: "Thay 5 lệnh chuyển tiền lặp lại mỗi tháng bằng một kế hoạch. Mỗi dòng tự giải thích vì sao có con số đó.",
    tags: [["auto", "Auto-action"], ["trust", "Trust & transparency"]],
    notes: [
      "Năm đích đến trong một màn hình: ngân hàng chính, chi tiêu, hai mục tiêu tiết kiệm và thẻ tín dụng.",
      "Mỗi dòng có lý do: “Như tháng 9”, “Dư nợ kỳ này”. Chạm vào số tiền để sửa.",
      "Bật “Tự động mỗi kỳ lương” thì tháng sau chỉ cần xác nhận từ thông báo.",
      "Một lần trượt và Face ID cho cả 5 lệnh.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("home", "Chia lương tháng 10", '<span class="cbtn"><i class="ri-more-2-fill"></i></span>')}
        <div class="body" style="gap:10px">
          <div class="split-top"><div class="sm muted">Lương nhận ngày 5/10</div><div class="amt"><span class="cur">VND</span>18,500,000</div></div>
          <div class="alloc rel">${P(1)}
            <div class="al"><span class="ph"><i class="ri-bank-line"></i></span><div><b>Về ngân hàng chính</b><div class="sub">VCB ...0912<span class="why-chip">Như tháng 9</span></div></div><div class="v">9,000,000</div></div>
            <div class="al">${im("insight-wallet.png")}<div><b>Giữ chi tiêu tại TCB</b><div class="sub">Tài khoản thanh toán</div></div><div class="v">5,000,000</div></div>
            <div class="al">${im("tri-suggestion-plane.png")}<div><b>Hũ Du lịch Đà Lạt</b><div class="sub">6 / 10 triệu</div></div><div class="v">1,500,000</div></div>
            <div class="al">${im("banner-piggy.png")}<div><b>Quỹ khẩn cấp</b><div class="sub">Lãi 4,5%/năm</div></div><div class="v">1,000,000</div></div>
            <div class="al rel">${P(2)}${im("tri-suggestion-freeze.png")}<div><b>Trả thẻ tín dụng</b><div class="sub"><span class="why-chip">Dư nợ kỳ này 1,950,000</span></div></div><div class="v">2,000,000</div></div>
          </div>
          <div class="card row sp rel">${P(3)}<div><b class="sm">Tự động mỗi kỳ lương</b><div class="xs muted">Tháng sau chỉ cần xác nhận từ thông báo</div></div><span class="toggle"></span></div>
        </div>
        <div class="foot rel">${P(4, "in")}
          <div class="slide" data-go="splitdone"><span class="knob"><i class="ri-arrow-right-line"></i></span>Trượt để xác nhận 5 lệnh</div>
          <div class="xs dim" style="text-align:center">Một lần Face ID cho toàn bộ kế hoạch</div>
        </div>
      </div>`,
  },
  {
    id: "splitdone", m: 2, name: "Đã chia lương",
    why: "Khép lại việc phân bổ bằng kết quả rõ ràng và một chút cảm xúc: tiến độ mục tiêu và lời nhắn cho người thân.",
    tags: [["emo", "Emotional & personal"], ["trust", "Trust & transparency"]],
    notes: [
      "Biên nhận theo từng đích đến. Khách hàng thấy cả 5 lệnh đã xong.",
      "Mục tiêu tiết kiệm hiện tiến độ và thời gian còn lại so với kế hoạch.",
      "Mục tiêu dành cho người thân có lời nhắn kèm theo. Đây là phần cảm xúc mà team đã vote.",
    ],
    html: () => `
      <div class="scr">${sb()}
        <div class="hdr"><span class="cbtn" data-go="home"><i class="ri-close-line"></i></span><h5></h5><span class="cbtn"><i class="ri-share-forward-line"></i></span></div>
        <div class="body">
          <div class="done-hero">${im("banner-piggy.png", "")}<h6>Đã chia xong lương tháng 10</h6><div class="sm muted" style="margin-top:4px">5 lệnh hoàn tất lúc 08:04</div></div>
          <div class="receipt card rel">${P(1)}
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>Về VCB ...0912</span><b>9,000,000</b></div>
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>Giữ chi tiêu</span><b>5,000,000</b></div>
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>2 hũ tiết kiệm</span><b>2,500,000</b></div>
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>Trả thẻ tín dụng</span><b>2,000,000</b></div>
          </div>
          <div class="goal rel">${P(2)}
            <div class="row">${im("tri-suggestion-plane.png")}<b class="grow">Du lịch Đà Lạt</b><span class="sm">7,5 / 10tr</span></div>
            <div class="bar"><i style="width:75%"></i></div>
            <div class="xs muted">Đi trước kế hoạch 12 ngày. Còn 2 kỳ lương nữa.</div>
          </div>
          <div class="goal rel">${P(3)}
            <div class="row">${im("insight-house.png")}<b class="grow">Mừng cưới em Linh</b><span class="sm">3 / 5tr</span></div>
            <div class="bar"><i style="width:60%;background:#ff656b"></i></div>
            <div class="note-card"><i class="ri-mail-heart-line"></i>“Chị để dành từng tháng cho ngày vui của em.” Lời nhắn sẽ được gửi cùng quà.</div>
          </div>
        </div>
        <div class="foot"><div class="btn" data-go="pay">Về trang chủ</div></div>
      </div>`,
  },

  /* ===== 3. Chi tiêu ===== */
  {
    id: "pay", m: 3, name: "Thanh toán thông minh",
    why: "Chuyển tiền bắt đầu từ ý định, không phải từ form. Khách hàng nói hoặc dán, app hiểu và điền sẵn.",
    tags: [["ai", "AI xuyên suốt"], ["ctx", "Contextual"]],
    notes: [
      "Phát hiện số tài khoản vừa copy từ app khác. Ngân hàng và tên người nhận được nhận diện sẵn.",
      "Ra lệnh bằng câu tự nhiên, gõ hoặc nói qua Siri: “Chuyển cho mẹ 5tr như tháng trước”.",
      "Người nhận gần đây và quét QR vẫn chỉ cách một chạm.",
    ],
    html: () => `
      <div class="scr">${sb()}
        <div class="hdr"><h5 style="font-size:24px">Thanh toán</h5><span class="cbtn"><i class="ri-history-line"></i></span></div>
        <div class="body">
          <div class="clip rel" data-go="review">${P(1)}
            <div class="row"><i class="ri-clipboard-line" style="color:#c4b5fd;font-size:18px"></i><b class="grow sm">Bạn vừa copy một số tài khoản</b><i class="ri-close-line dim"></i></div>
            <div class="sm" style="margin:6px 0 10px 28px;color:#d4d4d8">0123 4567 89, MB Bank<br><b style="color:#fff">NGUYEN THI HOA</b></div>
            <span class="chip ai" style="margin-left:28px">Chuyển tiền tới tài khoản này</span>
          </div>
          <div class="cmd rel" data-go="review">${P(2)}
            <div class="row sm muted"><img src="${LOGO}" alt="" style="width:20px">Bạn muốn làm gì?</div>
            <div class="typed">Chuyển cho mẹ 5tr như tháng trước</div>
            <div class="row sp"><div class="row" style="gap:6px"><span class="chip">Trả tiền điện</span><span class="chip">Nạp ví</span></div><span class="send"><img src="${LOGO}" alt=""></span></div>
          </div>
          <div class="rel">${P(3)}
            <div class="sm" style="font-weight:500;margin:2px 0 8px">Gần đây</div>
            <div class="people"><div><div class="ava">Mẹ</div>Mẹ</div><div><div class="ava">H</div>Hùng</div><div><div class="ava">T</div>Trang</div><div><div class="ava">EV</div>EVN</div><div><div class="ava"><i class="ri-add-line"></i></div>Mới</div></div>
          </div>
          <div class="qr-big" data-go="qr">${im("action-qr.png")}<div class="grow"><b>Quét QR</b><div class="xs muted">Ưu đãi gần bạn sẽ tự áp dụng</div></div><i class="ri-arrow-right-line"></i></div>
        </div>
        ${bb()}
      </div>`,
  },
  {
    id: "review", m: 3, name: "Xác nhận do AI điền",
    why: "AI làm phần khó, khách hàng giữ quyền quyết định. Màn hình xác nhận cho thấy rõ cái gì do AI điền và vì sao giao dịch an toàn.",
    tags: [["ai", "AI xuyên suốt"], ["trust", "Trust & transparency"]],
    notes: [
      "Trường do AI điền có nhãn riêng. Chạm để sửa bất kỳ trường nào.",
      "Tín hiệu tin cậy: người nhận quen, lịch sử giao dịch, kiểm tra lừa đảo đã chạy.",
      "Đường lui luôn rõ: sửa hoặc hủy nằm cạnh nút xác nhận.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("pay", "Xác nhận chuyển tiền")}
        <div class="body" style="gap:8px">
          <div class="rel" style="display:grid;gap:8px">${P(1)}
            <div class="field"><div class="lab">Người nhận<span class="ai-fill"><img src="${LOGO}" alt="">AI điền</span></div><div class="row" style="margin-top:6px"><div class="ava">Mẹ</div><div><div class="val" style="margin:0">Trần Thị Lan</div><div class="xs muted">Vietinbank ...3381</div></div></div></div>
            <div class="field"><div class="lab">Số tiền<span class="ai-fill"><img src="${LOGO}" alt="">Như 5/9</span></div><div class="val" style="font-size:26px"><span class="cur">VND</span>5,000,000</div></div>
            <div class="field"><div class="lab">Nội dung<span class="ai-fill"><img src="${LOGO}" alt="">AI điền</span></div><div class="val">Con gửi mẹ tháng 10</div></div>
            <div class="field"><div class="lab">Từ tài khoản</div><div class="val">Chi tiêu ...4821, còn 5,000,000</div></div>
          </div>
          <div class="trust rel">${P(2)}
            <div class="row"><i class="ri-shield-check-fill"></i>Người nhận quen, đã chuyển 6 lần từ tháng 4</div>
            <div class="row"><i class="ri-shield-check-fill"></i>Tên tài khoản khớp với danh bạ của bạn</div>
            <div class="row"><i class="ri-shield-check-fill"></i>Không có dấu hiệu lừa đảo</div>
          </div>
        </div>
        <div class="foot rel">${P(3, "in")}
          <div class="btn" data-go="qr"><i class="ri-fingerprint-line"></i>Xác nhận bằng Face ID</div>
          <div class="row" style="gap:8px"><div class="btn ghost grow" style="height:48px">Sửa</div><div class="btn ghost grow" style="height:48px">Hủy</div></div>
        </div>
      </div>`,
  },
  {
    id: "qr", m: 3, name: "QR kèm ưu đãi tại chỗ",
    why: "Ưu đãi đang tản mát ở nhiều nơi. Đưa đúng ưu đãi vào đúng lúc thanh toán, khách hàng không cần đi tìm.",
    tags: [["ctx", "Contextual"], ["auto", "Auto-action"]],
    notes: [
      "Nhận diện cửa hàng từ mã QR và vị trí. Ưu đãi phù hợp tự hiện trong luồng thanh toán.",
      "Số tiền được hoàn hiện trước khi trả, ưu đãi tự áp dụng.",
      "Lối vào Growth hub: mọi ưu đãi và thử thách gom về một chỗ.",
    ],
    html: () => `
      <div class="scr">
        <div class="cam"><div class="frame"></div><div class="hint">Đưa mã QR vào khung</div></div>
        ${sb()}
        <div class="hdr" style="position:relative"><span class="cbtn" data-go="pay"><i class="ri-close-line"></i></span><h5>Quét QR</h5><span class="cbtn"><i class="ri-image-line"></i></span></div>
        <div class="bsheet">
          <div class="grab"></div>
          <div class="row"><span class="ava" style="background:#f4f4f5;border-color:#e4e4e7;color:#000"><i class="ri-cup-line"></i></span><div class="grow"><b>Highlands Coffee</b><div class="xs" style="color:#71717a">Vincom Bà Triệu</div></div><b style="font-size:20px">65,000</b></div>
          <div class="offer rel">${P(1)}${im("banner-auto-earning-u.png", "")}<div class="grow"><b>Hoàn 15% khi trả bằng QR</b><div class="xs">Đã tự áp dụng. Còn 2 lượt trong tháng.</div></div><i class="ri-checkbox-circle-fill" style="font-size:22px"></i></div>
          <div class="row sp sm rel" style="padding:0 4px">${P(2, "l")}<span style="color:#71717a">Bạn trả</span><span><s style="color:#a1a1aa">65,000</s> <b>55,250 VND</b></span></div>
          <div class="btn" data-go="cal">Thanh toán 55,250</div>
          <div class="row sp sm rel" style="padding:2px 4px">${P(3, "l")}<span style="color:#71717a">12 ưu đãi khác gần bạn</span><b data-go="cal">Mở Growth hub</b></div>
        </div>
      </div>`,
  },
  {
    id: "cal", m: 3, name: "Lịch tài chính",
    why: "Một nơi duy nhất cho mọi khoản định kỳ, tính theo kỳ lương chứ không theo tháng dương lịch.",
    tags: [["nav", "Self-service navigation"], ["auto", "Auto-action"]],
    notes: [
      "Lịch đi từ ngày lương đến ngày lương. Chấm màu phân biệt hóa đơn, kỳ thẻ và ưu đãi.",
      "Hóa đơn được nhận diện từ lịch sử. Trạng thái rõ ràng: đã trích, tự động, cần trả.",
      "Growth hub: ưu đãi và thử thách của tháng ở cùng chỗ với hóa đơn.",
    ],
    html: () => `
      <div class="scr">${sb()}
        <div class="hdr"><h5 style="font-size:24px">Kế hoạch</h5><span class="chip">Kỳ 5/10 – 4/11</span></div>
        <div class="body" style="gap:10px">
          <div class="cal rel">${P(1)}
            ${["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => '<span class="h">' + d + "</span>").join("")}
            ${(() => {
              const marks = { 10: "b", 12: "b", 15: "c", 18: "o", 20: "b", 25: "b", 28: "o", 31: "b" };
              const days = [];
              for (let i = 5; i <= 31; i++) days.push(i);
              days.push(1);
              return days.map((d, idx) => {
                let c = marks[d] || "";
                if (d === 5) c += " pay";
                if (d < 12 && d > 5) c += " past";
                if (d === 12) c += " today";
                return '<span class="' + c + '">' + d + "</span>";
              }).join("");
            })()}
          </div>
          <div class="rel">${P(2)}
            <div class="row sp sm" style="margin-bottom:2px"><b>Sắp tới</b><span class="dim xs">Tổng 6,280,000</span></div>
            <div class="ev"><div class="date">15<small>T5</small></div><div><b class="sm">Thẻ tín dụng</b><div class="xs muted">1,950,000</div></div><span class="st ok">Đã trích</span></div>
            <div class="ev"><div class="date">20<small>T3</small></div><div><b class="sm">Học phí tiếng Anh</b><div class="xs muted">3,200,000</div></div><span class="st due">Cần trả</span></div>
            <div class="ev"><div class="date">25<small>CN</small></div><div><b class="sm">Điện, nước</b><div class="xs muted">khoảng 650,000</div></div><span class="st auto">Tự động</span></div>
            <div class="ev" style="border:0"><div class="date">31<small>T7</small></div><div><b class="sm">Netflix, iCloud</b><div class="xs muted">480,000</div></div><span class="st auto">Tự động</span></div>
          </div>
          <div class="rel">${P(3)}
            <div class="row sp sm" style="margin-bottom:8px"><b>Growth hub tháng này</b><span class="dim xs" data-go="alert">Xem tất cả</span></div>
            <div class="hub"><div>${im("banner-auto-earning-u.png", "")}<b>Hoàn 15%</b><div class="xs muted">Cafe bằng QR</div></div><div>${im("banner-piggy.png", "")}<b>Thử thách</b><div class="xs muted">Tiết kiệm 52 tuần</div></div><div>${im("action-paybills.png", "")}<b>x2 điểm</b><div class="xs muted">Hóa đơn điện</div></div></div>
          </div>
        </div>
        ${bb("“Tháng này còn hóa đơn nào?”")}
      </div>`,
  },

  /* ===== 4. Cuối tháng ===== */
  {
    id: "alert", m: 4, name: "Cảnh báo dòng tiền",
    why: "Báo trước khi hết tiền, không phải sau. Khách hàng có 10 ngày để chọn cách xử lý thay vì bất ngờ.",
    tags: [["ctx", "Contextual"], ["trust", "Trust & transparency"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Dự báo số dư đến ngày lương. Đường nét đứt chạm vùng âm trước ngày 5.",
      "Ba phương án xếp theo mức phù hợp, mỗi cái nói rõ hệ quả.",
      "“Vì sao?” chỉ ra hai khoản đang gây thiếu hụt: học phí và chi ăn uống tăng.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("cal", "Dòng tiền", '<span class="xs dim">Ngày 24/10</span>')}
        <div class="body" style="gap:10px">
          <div class="alert-hero rel">${P(1)}
            <span class="chip" style="background:#fff;color:#000;border:0"><i class="ri-error-warning-line"></i>Dự báo</span>
            <div class="ttl">Có thể thiếu 1,200,000 trước ngày lương</div>
            <svg class="fc" viewBox="0 0 320 110" aria-hidden="true">
              <rect x="0" y="84" width="320" height="26" fill="rgba(237,28,36,.22)" rx="6"/>
              <line x1="0" y1="84" x2="320" y2="84" stroke="#ff656b" stroke-width="1" stroke-dasharray="3 3"/>
              <polyline points="0,16 40,28 80,34 120,50 160,54 190,62" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/>
              <polyline points="190,62 220,72 250,88 285,96 320,102" fill="none" stroke="#ff656b" stroke-width="3" stroke-dasharray="6 5"/>
              <circle cx="190" cy="62" r="5" fill="#0b0b0b" stroke="#fff" stroke-width="3"/>
              <text x="190" y="48" font-size="10" text-anchor="middle" fill="#fff">Hôm nay</text>
              <text x="316" y="78" font-size="9" fill="#ff656b" text-anchor="end">4/11</text>
            </svg>
            <div class="row sp"><span class="xs muted">Số dư hiện tại 1,850,000</span><span class="why-chip rel">${P(3)}Vì sao?</span></div>
          </div>
          <div class="rel" style="display:grid;gap:8px">${P(2)}
            <div class="opt best" data-go="card">${im("tri-suggestion-freeze.png")}<div><div class="row" style="gap:6px"><b>Dùng thẻ tín dụng</b><span class="badge">Phù hợp</span></div><div class="xs muted">Trả vào ngày lương, 0đ lãi</div></div><i class="ri-arrow-right-line"></i></div>
            <div class="opt">${im("banner-piggy.png")}<div><b>Rút từ quỹ khẩn cấp</b><div class="xs muted">Quỹ còn 6,8tr, chậm mục tiêu 1 tháng</div></div><i class="ri-arrow-right-line"></i></div>
            <div class="opt">${im("insight-coffee-3d.png")}<div><b>Giảm chi ăn uống</b><div class="xs muted">Khoảng 120,000 mỗi ngày đến 4/11</div></div><i class="ri-arrow-right-line"></i></div>
          </div>
        </div>
        ${bb("“Có cách nào khác không?”")}
      </div>`,
  },
  {
    id: "card", m: 4, name: "Thẻ tín dụng như cầu nối",
    why: "Thẻ tín dụng xuất hiện đúng lúc cần, với số tiền vừa đủ và giới hạn an toàn do chính khách hàng đặt.",
    tags: [["trust", "Trust & transparency"], ["ctx", "Contextual"]],
    notes: [
      "Thẻ được đề xuất theo đúng khoản thiếu, đã duyệt trước dựa trên lịch sử lương.",
      "Mô phỏng chi phí: trả đúng hạn thì 0đ lãi, trả chậm thì tốn bao nhiêu. Kéo để đổi số tiền.",
      "Giới hạn an toàn: tự đặt hạn mức chi mỗi tháng và cảnh báo khi chạm 80%.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("alert", "Bù thiếu hụt bằng thẻ")}
        <div class="body" style="gap:10px">
          <div class="cc rel">${P(1, "tl")}<div class="row sp"><img class="logo" src="${LOGO}" alt="" style="margin-left:26px"><span class="xs" style="background:rgba(0,0,0,.3);padding:4px 10px;border-radius:999px">Đã duyệt trước</span></div><div class="chip2"></div><div class="row sp xs"><span>Everyday, hạn mức đến 20,000,000</span><span>Mở trong 2 phút</span></div></div>
          <div class="sim rel">${P(2)}
            <div class="row sp sm"><b>Nếu bạn chi bằng thẻ</b><b style="font-size:18px">1,200,000</b></div>
            <div class="range"><i></i><b></b></div>
            <div class="cmp"><div>Trả trước 15/11<b style="color:#4ade80">0đ lãi</b></div><div>Trả chậm 1 tháng<b style="color:#ff656b">khoảng 36,000</b></div></div>
            <div class="xs muted">Khoản trả thẻ sẽ tự thêm vào kế hoạch chia lương ngày 5/11.</div>
          </div>
          <div class="guard rel">${P(3)}
            <div class="row sp"><div><b>Hạn mức an toàn mỗi tháng</b><div class="xs muted">Bạn tự đặt, đổi bất cứ lúc nào</div></div><b>3,000,000</b></div>
            <div class="row sp"><span>Cảnh báo khi dùng 80%</span><span class="toggle"></span></div>
          </div>
        </div>
        <div class="foot"><div class="btn" data-go="story">Mở thẻ và dùng ngay</div><div class="xs dim" style="text-align:center">Dùng eKYC sẵn có, không cần giấy tờ</div></div>
      </div>`,
  },

  /* ===== 5. Nhìn lại ===== */
  {
    id: "story", m: 5, name: "Recap tháng",
    why: "Trả lời câu “tiền đi đâu” bằng một câu chuyện ngắn thay vì một danh sách giao dịch dài.",
    tags: [["emo", "Emotional & personal"], ["ctx", "Contextual"]],
    notes: [
      "Recap tự mở vào tối ngày 4, trước kỳ lương mới. Mỗi slide một con số.",
      "Ngôn ngữ đời thường, so sánh với tháng trước để có ngữ cảnh.",
      "Kết thúc bằng lời mời hỏi AI. Nhìn lại dẫn thẳng tới hành động.",
    ],
    html: () => `
      <div class="scr story">${sb()}
        <div class="story-bars"><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div>
        <div class="story-top"><img src="${LOGO}" alt=""><b>Tháng 10 của Minh</b><i class="ri-close-line" style="margin-left:auto;font-size:22px"></i></div>
        <div class="story-main rel" data-go="ai">${P(1, "in")}
          <div class="k">Từ 5/10 đến 4/11, bạn đã chi</div>
          <div class="big">14,2tr</div>
          <div class="line rel">${P(2)}Nhiều hơn tháng 9 khoảng 2,1 triệu. Phần lớn đến từ ăn uống.</div>
          <div class="bubbles">
            <div style="width:172px;height:172px;left:6px;top:40px;background:#fff;color:#000">${im("insight-coffee-3d.png", "")}Ăn uống<br>5,4tr</div>
            <div style="width:112px;height:112px;left:180px;top:0;background:rgba(255,255,255,.18)">Mua sắm<br>2,4tr</div>
            <div style="width:96px;height:96px;left:204px;top:120px;background:rgba(255,255,255,.12)">Hóa đơn<br>2,4tr</div>
            <div style="width:62px;height:62px;left:144px;top:188px;background:rgba(255,255,255,.1);font-size:10px">Đi lại</div>
          </div>
        </div>
        <div class="foot rel">${P(3, "in")}<div class="btn" data-go="ai"><img src="${LOGO}" alt="" style="width:22px">Hỏi vì sao tháng này chi nhiều</div></div>
      </div>`,
  },
  {
    id: "ai", m: 5, name: "Hỏi trợ lý AI",
    why: "Khách hàng hỏi bằng đúng câu trong đầu mình. AI trả lời bằng dữ kiện, chỉ rõ nguồn, và có thể biến câu trả lời thành một insight trên Home.",
    tags: [["ai", "AI xuyên suốt"], ["trust", "Trust & transparency"], ["new", "Từ bản AI-First"]],
    notes: [
      "Câu hỏi bằng ngôn ngữ của khách hàng, gõ hoặc nói.",
      "Trả lời có số liệu, so sánh và nguồn: 86 giao dịch trong kỳ lương.",
      "“Thêm insight cà phê” biến câu trả lời thành một widget trong bảng Insight, như luồng Add new insight của bản AI-First.",
      "Ô nhập dạng pill giống thanh “Hỏi bất cứ điều gì” ở Home, nên khách hàng nhận ra ngay.",
    ],
    html: () => `
      <div class="scr">${sb()}
        <div class="tbar"><span class="cbtn" style="margin-right:auto"><i class="ri-history-line"></i></span><span class="cbtn"><i class="ri-search-line"></i></span><span class="cbtn" data-go="story"><i class="ri-close-line"></i></span></div>
        <div class="chat">
          <div class="bub-u rel">${P(1, "l")}Mình tiêu cái gì mà khiếp thế?</div>
          <div class="bub-a rel">${P(2)}<img src="${LOGO}" alt="">
            <div class="ans">
              <div>Tháng này bạn chi <b style="color:#fff">14,2 triệu</b>, nhiều hơn tháng 9 khoảng <b style="color:#fff">17%</b>. Ba khoản tăng nhiều nhất:</div>
              <div class="reason"><span>Giao đồ ăn, 23 đơn</span><b>2,1tr</b><div class="bar"><i style="width:90%"></i></div></div>
              <div class="reason"><span>Mua sắm online dịp 10.10</span><b>1,8tr</b><div class="bar"><i style="width:72%"></i></div></div>
              <div class="reason"><span>Cà phê, 19 lần</span><b>1,4tr</b><div class="bar"><i style="width:56%"></i></div></div>
              <div class="src"><i class="ri-database-2-line"></i>Dựa trên 86 giao dịch từ 5/10 đến 4/11</div>
            </div>
          </div>
          <div class="sugg rel">${P(3)}<span class="chip hot" data-go="bins2"><img src="${LOGO}" alt="">Thêm insight cà phê</span><span class="chip ai" data-go="insight">Xem gợi ý tháng 11</span><span class="chip">So với tháng 8</span></div>
        </div>
        <div class="composer rel">${P(4)}<i class="ri-add-line" style="font-size:20px"></i><span class="in">Hỏi tiếp về chi tiêu của bạn</span><span class="send"><img src="${LOGO}" alt=""></span></div>
      </div>`,
  },
  {
    id: "bins2", m: 5, name: "Insight mới từ AI",
    why: "Câu trả lời của AI không trôi mất trong cuộc trò chuyện. Nó trở thành một widget trên Home để khách hàng theo dõi mỗi ngày.",
    tags: [["new", "Từ bản AI-First"], ["ai", "AI xuyên suốt"], ["ctx", "Contextual"]],
    notes: [
      "Mục tiêu vẫn nằm trên cùng, giữ cảm giác tiến bộ ngay cả khi cuối tháng căng thẳng.",
      "Widget tự cập nhật theo thời điểm: ngày 4 chỉ còn 320k có thể chi, ăn uống vượt ngân sách.",
      "Insight cà phê vừa tạo có viền tím và nhãn “Mới từ AI”. Toast xác nhận và cho phép hoàn tác.",
      "Đóng để xem gợi ý cụ thể cho tháng 11.",
    ],
    html: () => insightSheet("late"),
  },
  {
    id: "insight", m: 5, name: "Kiểm soát chi tiêu",
    why: "Từ hiểu đến hành động. Gợi ý được áp dụng thẳng vào kế hoạch chia lương tháng sau, khép lại vòng lặp của hành trình.",
    tags: [["trust", "Trust & transparency"], ["auto", "Auto-action"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Cơ cấu chi tiêu theo nhóm, nhìn một lần là thấy nhóm lớn nhất.",
      "Theo dõi ngân sách từng nhóm. Nhóm vượt ngân sách được đánh dấu đỏ.",
      "Gợi ý có mức tiết kiệm dự kiến. “Áp dụng” sẽ cập nhật kế hoạch chia lương ngày 5/11.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("bins2", "Chi tiêu tháng 10", '<span class="chip">5/10 – 4/11</span>')}
        <div class="body" style="gap:10px">
          <div class="donut-row rel">${P(1, "l")}
            <div class="donut"><div><span>Tổng chi<b>14,2tr</b></span></div></div>
            <div class="leg"><span style="--c:#ff656b">Ăn uống<em>5,4tr</em></span><span style="--c:#ed1c24">Mua sắm<em>2,4tr</em></span><span style="--c:#a1a1aa">Hóa đơn<em>2,4tr</em></span><span style="--c:#52525b">Đi lại<em>2,0tr</em></span><span style="--c:#3f3f46">Khác<em>2,0tr</em></span></div>
          </div>
          <div class="budget rel">${P(2)}
            <div class="row sp sm"><b>Ngân sách</b><span class="xs dim">3 / 4 nhóm trong mức</span></div>
            <div class="bud over"><div class="row sp"><span>Ăn uống</span><span><b style="color:#ff656b">5,4tr</b> / 4,5tr</span></div><div class="bar"><i style="width:100%"></i></div></div>
            <div class="bud"><div class="row sp"><span>Mua sắm</span><span><b>2,4tr</b> / 3tr</span></div><div class="bar"><i style="width:80%"></i></div></div>
            <div class="bud"><div class="row sp"><span>Đi lại</span><span><b>2,0tr</b> / 2,5tr</span></div><div class="bar"><i style="width:80%"></i></div></div>
          </div>
          <div class="rec rel">${P(3)}
            <div class="lbl"><img src="${LOGO}" alt="">Gợi ý cho tháng 11</div>
            <b>Bớt 2 đơn giao đồ ăn mỗi tuần, tiết kiệm khoảng 640,000</b>
            <div class="row sp"><span class="why-chip">Vì sao?</span><span class="pill k" data-go="lock">Áp dụng cho tháng 11</span></div>
          </div>
        </div>
        ${bb("“So sánh với tháng 9”")}
      </div>`,
  },
];

const byId = Object.fromEntries(SCREENS.map((s, i) => [s.id, { ...s, i }]));

/* ---------- Month curve ---------- */
function drawCurve() {
  const svg = document.getElementById("curve");
  const X0 = 120, X1 = 1150, Y0 = 70, Y1 = 300;
  const dayX = (d) => X0 + ((d - 5 + 31) % 31) / 30 * (X1 - X0);
  const val = (v) => Y1 - v * (Y1 - Y0);
  // [day, now, new]
  const pts = [[5, 0.88, 0.92], [6, 0.62, 0.9], [9, 0.6, 0.86], [15, 0.55, 0.8], [20, 0.4, 0.74], [24, 0.24, 0.66], [28, 0.12, 0.62], [2, 0.18, 0.74], [4, 0.3, 0.86]];
  const path = (k) => {
    const p = pts.map((r) => [dayX(r[0]), val(r[k])]);
    let d = "M" + p[0][0] + "," + p[0][1];
    for (let i = 0; i < p.length - 1; i++) {
      const p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += " C" + c1.join(",") + " " + c2.join(",") + " " + p2.join(",");
    }
    return d;
  };
  const mDays = [5, 6, 15, 27, 4];
  const ticks = [5, 10, 15, 20, 25, 30, 4];
  let s = "";
  s += '<line class="axis" x1="' + X0 + '" y1="' + Y1 + '" x2="' + X1 + '" y2="' + Y1 + '"/>';
  s += '<text class="zone" x="' + (X0 - 8) + '" y="' + (Y0 + 4) + '" text-anchor="end">Chủ động</text>';
  s += '<text class="zone" x="' + (X0 - 8) + '" y="' + (Y1) + '" text-anchor="end">Lo lắng</text>';
  ticks.forEach((d) => {
    const x = dayX(d);
    s += '<line class="axis" x1="' + x + '" y1="' + Y1 + '" x2="' + x + '" y2="' + (Y1 + 6) + '"/>';
    s += '<text class="tick" x="' + x + '" y="' + (Y1 + 22) + '" text-anchor="middle">' + d + (d === 5 ? "/10" : d === 4 ? "/11" : "") + "</text>";
  });
  // shaded month-end zone
  s += '<rect x="' + dayX(24) + '" y="' + Y0 + '" width="' + (dayX(4) - dayX(24)) + '" height="' + (Y1 - Y0) + '" fill="#e3262f" opacity="0.05" rx="10"/>';
  s += '<path class="now" d="' + path(1) + '"/>';
  s += '<path class="new new-draw" id="newPath" d="' + path(2) + '"/>';
  MOMENTS.forEach((m, i) => {
    const d = mDays[i];
    const x = dayX(d);
    const yNow = val(interp(d, 1)), yNew = val(interp(d, 2));
    s += '<circle class="m-dot-now" cx="' + x + '" cy="' + yNow + '" r="5"/>';
    s += '<a class="m-link" href="#m' + m.n + '" aria-label="Khoảnh khắc ' + m.n + ': ' + m.title + '">';
    s += '<circle cx="' + x + '" cy="' + yNew + '" r="15" fill="#e3262f"/>';
    s += '<text class="m-num" x="' + x + '" y="' + (yNew + 4.5) + '" text-anchor="middle">' + m.n + "</text>";
    const anchor = i === 0 ? "start" : i === 4 ? "end" : "middle";
    const lx = i === 0 ? x - 14 : i === 4 ? x + 14 : i === 1 ? dayX(9.5) : x;
    s += '<text class="m-label" x="' + lx + '" y="' + (Y0 - 34) + '" text-anchor="' + anchor + '">' + m.title + "</text>";
    s += '<text class="m-day" x="' + lx + '" y="' + (Y0 - 16) + '" text-anchor="' + anchor + '">' + m.day + "</text>";
    s += "</a>";
    const ax = i === 1 ? lx : x;
    s += '<path d="M' + ax + "," + (Y0 - 8) + " L" + x + "," + (yNew - 18) + '" stroke="#9aa3b2" fill="none" stroke-dasharray="2 4"/>';
  });
  // quote at the low point
  const qx = dayX(28), qy = val(0.12);
  s += '<text class="quote" x="' + qx + '" y="' + (qy + 34) + '" text-anchor="middle">“Mình tiêu cái gì mà khiếp thế?”</text>';
  svg.innerHTML = s;
  const np = document.getElementById("newPath");
  np.style.setProperty("--len", Math.ceil(np.getTotalLength()));

  function interp(d, k) {
    const xs = pts.map((p) => dayX(p[0]));
    const x = dayX(d);
    for (let i = 0; i < pts.length - 1; i++) {
      if (x >= xs[i] && x <= xs[i + 1]) {
        const t = (x - xs[i]) / (xs[i + 1] - xs[i] || 1);
        return pts[i][k] + (pts[i + 1][k] - pts[i][k]) * t;
      }
    }
    return pts[pts.length - 1][k];
  }
}

/* ---------- Journey map ---------- */
function drawJourney() {
  const el = document.getElementById("jm");
  const rows = [
    ["", (m) => '<span class="n">' + m.n + "</span><b>" + m.title + "</b><small>" + m.day + ". " + m.desc + "</small>", "colh"],
    ["Khách hàng làm gì", (m) => m.doing, ""],
    ["Suy nghĩ", (m) => m.feel, "feel"],
    ["Cảm xúc", (m) => '<div class="emo-row">Hiện tại<span class="emo"><i style="width:' + m.now * 100 + '%"></i></span>Với đề xuất<span class="emo"><i style="width:' + m.next * 100 + '%"></i></span></div>', ""],
    ["Điểm đau hiện tại", (m) => m.pain, "pain"],
    ["Cơ hội", (m) => "<ul>" + m.opp.map((o) => "<li>" + o + "</li>").join("") + "</ul>", "opp"],
    ["Capability", (m) => m.caps.join(", "), "cap"],
    ["Màn hình", (m) => '<div class="scr-links">' + SCREENS.filter((s) => s.m === m.n).map((s) => '<a href="#s-' + s.id + '">' + (s.i + 1) + ". " + s.name + "</a>").join("") + "</div>", ""],
  ];
  SCREENS.forEach((s, i) => (s.i = i));
  let h = "";
  rows.forEach(([label, fn, cls]) => {
    h += '<div class="rh ' + (cls === "colh" ? "colh" : "") + '">' + label + "</div>";
    MOMENTS.forEach((m) => (h += '<div class="' + cls + '">' + fn(m) + "</div>"));
  });
  el.innerHTML = h;
}

/* ---------- Screens gallery ---------- */
function drawMoments() {
  const el = document.getElementById("moments");
  el.innerHTML = MOMENTS.map((m) => {
    const shots = SCREENS.filter((s) => s.m === m.n)
      .map(
        (s) => `
        <article class="shot" id="s-${s.id}">
          <div class="dev" aria-hidden="true">${s.html()}</div>
          <div class="notes glass">
            <div class="eyebrow">Màn hình ${s.i + 1}</div>
            <h4>${s.name}</h4>
            <p class="why">${s.why}</p>
            <div class="rule"></div>
            <ol>${s.notes.map((n, i) => '<li><span class="k">' + (i + 1) + "</span><span>" + n + "</span></li>").join("")}</ol>
            <div class="tags">${s.tags.map(([c, t]) => '<span class="tag t-' + c + '">' + t + "</span>").join("")}</div>
            <button class="try" type="button" data-proto="${s.id}"><i class="ri-play-fill"></i>Thử trong prototype</button>
          </div>
        </article>`
      )
      .join("");
    return `
      <div class="moment" id="m${m.n}">
        <div class="moment-head">
          <span class="mn">${m.n}</span>
          <div><h3>${m.title}</h3><div class="md">${m.day}. ${m.desc}</div></div>
          <div class="caps">${m.caps.map((c) => '<span class="cap-chip">' + c + "</span>").join("")}</div>
        </div>
        <div class="shots">${shots}</div>
      </div>`;
  }).join("");

  el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-proto]");
    if (!b) return;
    go(b.dataset.proto);
    document.getElementById("prototype").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  });
}

/* ---------- Prototype ---------- */
let cur = 0;
function drawFlow() {
  const ol = document.getElementById("flowList");
  let h = "";
  MOMENTS.forEach((m) => {
    h += '<li class="mh">' + m.n + ". " + m.title + "</li>";
    SCREENS.filter((s) => s.m === m.n).forEach((s) => {
      h += '<li><button type="button" data-step="' + s.id + '"><span class="k">' + (s.i + 1) + "</span>" + s.name + "</button></li>";
    });
  });
  ol.innerHTML = h;
  ol.addEventListener("click", (e) => {
    const b = e.target.closest("[data-step]");
    if (b) go(b.dataset.step);
  });
}

function go(id, push = true) {
  const s = byId[id];
  if (!s) return;
  cur = s.i;
  const dev = document.getElementById("stageDev");
  dev.innerHTML = s.html();
  const m = MOMENTS[s.m - 1];
  document.getElementById("nowMoment").textContent = "Khoảnh khắc " + m.n + ": " + m.title + ", " + m.day;
  document.getElementById("nowTitle").textContent = s.i + 1 + ". " + s.name;
  document.getElementById("nowWhy").textContent = s.why;
  document.querySelectorAll("#flowList [data-step]").forEach((b) => b.setAttribute("aria-current", b.dataset.step === id ? "true" : "false"));
  if (push) history.replaceState(null, "", "#p-" + id);
}

function initProto() {
  const dev = document.getElementById("stageDev");
  dev.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go]");
    if (t) go(t.dataset.go);
  });
  document.getElementById("nextBtn").onclick = () => go(SCREENS[(cur + 1) % SCREENS.length].id);
  document.getElementById("prevBtn").onclick = () => go(SCREENS[(cur - 1 + SCREENS.length) % SCREENS.length].id);
  const hint = document.getElementById("hintBtn");
  hint.onclick = () => {
    const on = hint.getAttribute("aria-pressed") !== "true";
    hint.setAttribute("aria-pressed", on);
    document.getElementById("stage").classList.toggle("hint", on);
  };
  document.addEventListener("keydown", (e) => {
    if (e.target.closest("input, textarea")) return;
    const r = document.getElementById("prototype").getBoundingClientRect();
    if (!document.body.classList.contains("present") && (r.top > innerHeight * 0.5 || r.bottom < innerHeight * 0.5)) return;
    if (e.key === "ArrowRight") document.getElementById("nextBtn").click();
    if (e.key === "ArrowLeft") document.getElementById("prevBtn").click();
  });
  const pres = document.getElementById("presentBtn");
  const setPresent = (on) => {
    document.body.classList.toggle("present", on);
    pres.setAttribute("aria-pressed", on);
    pres.lastChild.textContent = on ? "Thoát trình chiếu" : "Trình chiếu";
    if (on) scrollTo(0, 0); else document.getElementById("prototype").scrollIntoView();
  };
  pres.onclick = () => setPresent(!document.body.classList.contains("present"));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && document.body.classList.contains("present")) setPresent(false); });
  if (/present/.test(location.search + location.hash)) setPresent(true);
  const h = location.hash.match(/^#p-(\w+)/);
  go(h && byId[h[1]] ? h[1] : "lock", false);
  if (h) document.getElementById("prototype").scrollIntoView();
}

SCREENS.forEach((s, i) => (s.i = i));
drawCurve();
drawJourney();
drawMoments();
drawFlow();
initProto();
