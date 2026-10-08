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
    <p>Đang sinh lời từ hôm nay. Xem kế hoạch lương tháng 10.</p>
    <span class="pill k" style="margin-top:12px">Xem kế hoạch</span>${im("banner-piggy.png", "")}
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
             <div class="w"><div class="t">Lương đang sinh lời</div><div class="v">18,5m</div><div class="s">dự kiến +69k tháng này</div><span class="icn" style="background:#fecaca">${im("banner-auto-earning-u.png", "")}</span></div>
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
    opp: ["Lương sinh lời tự động ngay khi về", "Thông báo nói rõ lợi ích ở lại, kèm kế hoạch lương", "Insight ngay dưới số dư, một chạm là thấy"],
    leak: "Nhận lương, kiểm tra số dư rồi đóng app. Không có lý do để quay lại.",
    lever: "Cho thấy lợi ích ngay từ thông báo lương đầu tiên.",
    now: 0.88, next: 0.92,
  },
  {
    n: 2, day: "Ngày 5–6", title: "Phân bổ",
    desc: "Phân bổ lương cho chi tiêu, tiết kiệm và các mục tiêu.",
    caps: ["Savings & Goals"],
    doing: "Tự chia lương cho chi tiêu, tiết kiệm và các mục tiêu, mỗi tháng làm lại từ đầu.",
    feel: "“Lại phải chuyển tay từng khoản.”",
    pain: "Với khách hàng: làm lại nhiều lệnh mỗi tháng. Với TCB: lương chỉ đi qua, không ở lại.",
    opp: ["Kế hoạch lương mặc định giữ lại và sinh lời", "Mỗi đồng lương có chỗ và tự sinh lời", "Hũ tiết kiệm có lời nhắn cho người thân"],
    leak: "Lương không có kế hoạch, số dư nằm yên và không sinh lời.",
    lever: "Kế hoạch lương chia toàn bộ lương vào các hũ tại TCB, tất cả đều sinh lời.",
    now: 0.62, next: 0.9,
  },
  {
    n: 3, day: "Ngày 6–24", title: "Chi tiêu hằng ngày",
    desc: "QR, chuyển khoản, ưu đãi, hóa đơn định kỳ.",
    caps: ["Daily Spend & Lifestyle", "Rewards", "Bill Hub"],
    doing: "Quét QR ăn uống, chuyển tiền cho gia đình, trả điện nước, internet, học phí.",
    feel: "“Ưu đãi ở đâu nhỉ? Hóa đơn này trả chưa?”",
    pain: "Ưu đãi tản mát nhiều nơi. Hóa đơn mỗi cái một chỗ. Chuyển tiền nhiều bước.",
    opp: ["Bật tự động cho hóa đơn đang trả tay qua TCB", "QR có hoàn tiền và U-Point thấy ngay", "Lệnh bằng lời nói hoặc copy số tài khoản"],
    leak: "Hóa đơn, ví điện tử và QR hằng ngày chưa gắn với TCB.",
    lever: "Biến thói quen hằng ngày tại TCB thành “mỏ neo”: hóa đơn tự động, QR có lợi, chuyển tiền gia đình nhanh.",
    now: 0.55, next: 0.8,
  },
  {
    n: 4, day: "Ngày 24–4", title: "Áp lực cuối tháng",
    desc: "Số dư giảm, nhu cầu chi vẫn còn.",
    caps: ["Credit Card Onboarding & Usage"],
    doing: "Thấy số dư thấp, bắt đầu dùng thẻ tín dụng để bù.",
    feel: "“Mình tiêu cái gì mà khiếp thế?”",
    pain: "Chỉ biết hết tiền khi đã hết. Thẻ tín dụng được chào bán không đúng lúc.",
    opp: ["Dự báo thiếu hụt trước 10 ngày", "3 phương án kèm hệ quả rõ ràng", "Thẻ TCB duyệt trước nhờ lịch sử lương"],
    leak: "Thiếu tiền nhưng không có giải pháp ngay trong app TCB.",
    lever: "Lương ở lại càng lâu, hạn mức càng tốt. Thẻ trở thành lý do để ở lại.",
    now: 0.14, next: 0.62,
  },
  {
    n: 5, day: "Ngày 4", title: "Nhìn lại tháng",
    desc: "Muốn hiểu và kiểm soát tốt hơn cho tháng sau.",
    caps: ["Spending Control (PFM)"],
    doing: "Lướt lịch sử giao dịch, cố đoán tiền đã đi đâu.",
    feel: "“Tháng này mình đã tiêu tiền vào đâu mà hết nhanh như vậy?”",
    pain: "Lịch sử là một danh sách dài. Không trả lời được câu hỏi “tiền đi đâu”.",
    opp: ["Recap: lương đã sinh lời bao nhiêu, nhận lại gì", "AI trả lời tiền đi đâu bằng dữ liệu chi tiêu thật", "Gợi ý dẫn tiền tiết kiệm vào hũ tại TCB"],
    leak: "Không thấy TCB mang lại gì. Tháng sau lặp lại thói quen cũ.",
    lever: "Ghi nhận lợi ích đã nhận bằng tiền thật, để tháng sau tiếp tục.",
    now: 0.3, next: 0.86,
  },
];

/* ---------- Screens ---------- */
const SCREENS = [
  /* ===== 1. Lương về ===== */
  {
    id: "lock", m: 1, name: "Thông báo lương",
    keep: "Ngày lương là khoảnh khắc quyết định. Thông báo đầu tiên phải cho thấy ngay lợi ích của việc để lương ở TCB.",
    why: "Ngày lương là lúc khách hàng mở app nhiều nhất. Biến thông báo biến động số dư thành điểm bắt đầu của cả kế hoạch tháng.",
    tags: [["auto", "Auto-action"], ["ctx", "Contextual"]],
    notes: [
      "Widget màn hình khóa cho thấy lương đang tự sinh lời từng ngày. Lợi ích ở lại hiện ngay cả khi chưa mở app.",
      "Thông báo lương nói lợi ích trước, rồi mới đến kế hoạch lương.",
    ],
    html: () => `
      <div class="scr lock">${sb()}
        <div class="lk-date">Thứ Hai, 5 tháng 10</div>
        <div class="lk-time">8:02</div>
        <div class="lk-widget rel">${P(1)}<span>Lương đang sinh lời</span><b>+2,280 hôm nay</b><div class="bar"><i style="width:100%"></i></div></div>
        <div class="lk-notif rel" data-go="home">${P(2)}
          <div class="n-head"><span class="n-app"><img src="${LOGO}" alt=""></span><span>Techcombank</span><span class="n-time">bây giờ</span></div>
          <b>Lương tháng 10 đã về: +18,500,000 VND</b>
          <p>Lương bắt đầu sinh lời tự động từ hôm nay. Kế hoạch lương tháng 10 đã sẵn sàng.</p>
          <div class="n-acts"><span>Để sau</span><span>Xem kế hoạch</span></div>
        </div>
        <div class="lk-bottom"><i class="ri-flashlight-fill"></i><i class="ri-camera-fill"></i></div>
      </div>`,
  },
  {
    id: "home", m: 1, name: "Home ngày lương",
    keep: "Lợi ích ở lại hiện ngay dưới số dư, mỗi ngày: tiền đang tự sinh lời. Khách hàng không phải đi tìm lý do để giữ tiền ở đây.",
    why: "Home vẫn là app ngân hàng: số dư ở trung tâm, thao tác quen thuộc ngay bên dưới. Ngày lương chỉ thêm một thẻ “Dành cho bạn”, không thay chỗ của số dư.",
    tags: [["new", "Từ bản AI-First"], ["ctx", "Contextual"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Số dư hiện tại vẫn là con số lớn nhất, đặt giữa màn hình, có nút ẩn hiện.",
      "Dòng sinh lời tự động ngay dưới số dư: tiền ở lại TCB đang làm việc mỗi ngày. “Vì sao?” mở ra lãi suất và cách tính.",
      "Nút Insight ngay dưới số dư. Một chạm mở bảng widget tài chính.",
      "Thẻ ngày lương trong “Dành cho bạn”: chỉ hiện vào ngày lương, dẫn thẳng vào kế hoạch lương.",
      "Dải tháng lương từ ngày 5 đến ngày 4. Khách hàng biết mình đang ở đâu và sắp phải trả gì.",
    ],
    html: () => `
      <div class="scr">${sb()}${tbar()}
        <div class="body" style="gap:12px">
          <div class="bal-c rel">${P(1)}
            <div class="lab">Số dư hiện tại</div>
            <div class="amt"><span class="cur">VND</span>23,350,000<img src="assets/visibility.svg" alt=""></div>
            <div class="safe rel">${P(2)}<i class="ri-seedling-line" style="color:#4ade80"></i>Sinh lời tự động: <b style="color:#4ade80">+2,280 hôm nay</b><span class="why-chip">Vì sao?</span></div>
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
    keep: "Widget “Lương đang sinh lời” cho khách hàng thấy mỗi ngày tiền ở TCB đang làm việc cho họ.",
    why: "Mang lại tính năng Insight từ bản AI-First. Chạm Insight dưới số dư, một bảng widget trượt xuống, trả lời ngay “mình đang ổn không” mà không phải rời Home.",
    tags: [["new", "Từ bản AI-First"], ["ctx", "Contextual"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Mục tiêu lớn nhất nằm trên cùng, với thước đo tiến độ. Ngày lương là lúc mục tiêu vừa được nạp thêm.",
      "Mỗi widget một con số và một câu giải thích: có thể chi, ngân sách ăn uống, và số lương đang sinh lời kèm tiền lãi dự kiến.",
      "“Thêm insight mới” mở trợ lý AI. Khách hàng tự yêu cầu insight mình cần, bằng lời của mình.",
      "Sửa để ẩn hoặc sắp xếp widget. Đóng để quay về Home, Home vẫn mờ phía sau để giữ ngữ cảnh.",
    ],
    html: () => insightSheet("payday"),
  },

  /* ===== 2. Phân bổ ===== */
  {
    id: "split", m: 2, name: "Kế hoạch lương",
    keep: "Đây là màn quyết định của cả đề xuất. Khi mỗi đồng lương đã có chỗ và đang sinh lời ở TCB, việc giữ tiền ở đây trở thành lựa chọn tự nhiên ngay từ ngày lương.",
    why: "Kế hoạch lương chia toàn bộ lương vào các hũ tại TCB, mỗi hũ một mục đích rõ ràng, và tất cả đều tự sinh lời.",
    tags: [["keep", "Giữ chân lương"], ["auto", "Auto-action"], ["trust", "Trust & transparency"]],
    notes: [
      "Thanh phân bổ cho thấy cả tháng lương trong một cái nhìn. Lần đầu, khách hàng chọn một mẫu gợi ý hoặc trả lời vài câu hỏi để đặt con số. Các tháng sau dùng lại kế hoạch đã lưu.",
      "Mọi hũ đều tự sinh lời. Tiền chi tiêu vẫn dùng QR, chuyển khoản ngay, không bị khóa.",
      "Lợi ích của kế hoạch nói bằng tiền: lãi dự kiến, U-Point và hoàn tiền khi chi bằng TCB.",
      "Một lần trượt và Face ID cho cả kế hoạch. Tự lặp lại mỗi kỳ lương.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("home", "Kế hoạch lương tháng 10", '<span class="cbtn"><i class="ri-more-2-fill"></i></span>')}
        <div class="body" style="gap:8px">
          <div class="split-top rel">${P(1)}<div class="sm muted">Lương nhận ngày 5/10</div><div class="amt"><span class="cur">VND</span>18,500,000</div>
            <div class="kbar"><i style="flex:13;background:#4ade80"></i><i style="flex:1.5;background:#93c5fd"></i><i style="flex:2;background:#ff656b"></i><i style="flex:2;background:#fde68a"></i></div>
            <div class="row sp xs"><span style="color:#4ade80">Toàn bộ sinh lời 4,5%/năm</span><span class="dim">Chi tiêu bất cứ lúc nào</span></div>
          </div>
          <div class="alloc rel">${P(2)}
            <div class="al">${im("insight-wallet.png")}<div><b>Chi tiêu hằng ngày</b><div class="sub">Sinh lời tự động, dùng QR ngay</div></div><div class="v">13,000,000</div></div>
            <div class="al">${im("tri-suggestion-plane.png")}<div><b>Hũ Du lịch Đà Lạt</b><div class="sub">6 / 10 triệu</div></div><div class="v">1,500,000</div></div>
            <div class="al">${im("banner-piggy.png")}<div><b>Quỹ khẩn cấp</b><div class="sub">Rút bất cứ lúc nào</div></div><div class="v">2,000,000</div></div>
            <div class="al">${im("tri-suggestion-freeze.png")}<div><b>Trả thẻ TCB</b><div class="sub"><span class="why-chip">Dư nợ kỳ này 1,950,000</span></div></div><div class="v">2,000,000</div></div>
          </div>
          <div class="gain rel">${P(3)}
            <div class="xs" style="opacity:.7">Bạn nhận được trong tháng 10</div>
            <div class="gain-row"><div><b>+69,000</b><span>lãi dự kiến</span></div><div><b>x2</b><span>U-Point khi quét QR</span></div><div><b>15%</b><span>hoàn tiền cà phê</span></div></div>
          </div>
        </div>
        <div class="foot rel">${P(4, "in")}
          <div class="slide" data-go="splitdone"><span class="knob"><i class="ri-arrow-right-line"></i></span>Trượt để xác nhận kế hoạch</div>
          <div class="xs dim" style="text-align:center">Một lần Face ID. Tự lặp lại mỗi kỳ lương.</div>
        </div>
      </div>`,
  },
  {
    id: "splitdone", m: 2, name: "Kế hoạch đã chạy",
    keep: "Ghi nhận lợi ích ngay sau khi xác nhận: tiền đang sinh lời, lãi dự kiến. Khách hàng thấy mình được lợi khi để lương ở TCB.",
    why: "Khép lại bằng lợi ích cụ thể và một chút cảm xúc: tiền ở lại đang sinh lời, và hũ quà cưới cho em gái có lời nhắn.",
    tags: [["emo", "Emotional & personal"], ["trust", "Trust & transparency"]],
    notes: [
      "Kết quả đầu tiên là lợi ích: toàn bộ lương đang sinh lời và lãi dự kiến của tháng.",
      "Biên nhận theo từng hũ. Khách hàng thấy mỗi đồng lương đã có chỗ.",
      "Mục tiêu dành cho người thân có lời nhắn kèm theo. Đây là phần cảm xúc mà team đã vote.",
    ],
    html: () => `
      <div class="scr">${sb()}
        <div class="hdr"><span class="cbtn" data-go="home"><i class="ri-close-line"></i></span><h5></h5><span class="cbtn"><i class="ri-share-forward-line"></i></span></div>
        <div class="body">
          <div class="done-hero">${im("banner-piggy.png", "")}<h6>Kế hoạch lương đã chạy</h6><div class="sm muted" style="margin-top:4px">4 hũ đã sẵn sàng lúc 08:04</div></div>
          <div class="keepc rel">${P(1)}
            <div class="row">${im("banner-auto-earning-u.png")}<div class="grow"><div class="xs" style="opacity:.75">Đang sinh lời</div><b style="font-size:22px">18,500,000</b></div><div style="text-align:right"><div class="xs" style="opacity:.75">Lãi dự kiến</div><b>+69,000</b></div></div>
            <div class="xs" style="opacity:.85">Mỗi đồng lương đã có chỗ. Rút hoặc chi bất cứ lúc nào.</div>
          </div>
          <div class="receipt card rel">${P(2)}
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>Chi tiêu hằng ngày</span><b>13,000,000</b></div>
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>2 hũ tiết kiệm</span><b>3,500,000</b></div>
            <div class="row sp"><span class="row"><i class="ri-checkbox-circle-fill"></i>Trả thẻ TCB</span><b>2,000,000</b></div>
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
    keep: "Chuyển tiền cho gia đình và bạn bè là việc làm hằng tuần. Khi việc này nhanh nhất ở TCB, TCB trở thành app khách hàng mở mỗi ngày.",
    why: "Chuyển tiền bắt đầu từ ý định, không phải từ form. Khách hàng nói hoặc dán, app hiểu và điền sẵn.",
    tags: [["ai", "AI xuyên suốt"], ["ctx", "Contextual"]],
    notes: [
      "Khi khách hàng mở app sau khi copy một số tài khoản, hệ điều hành hỏi quyền dán. Tên người nhận được tra qua Napas như một lần chuyển tiền thường.",
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
    keep: "Nguồn tiền mặc định là tài khoản chi tiêu đang sinh lời. Khách hàng thấy tiền vẫn làm việc đến tận lúc chi.",
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
            <div class="field"><div class="lab">Từ tài khoản</div><div class="val">Chi tiêu TCB ...4821, đang sinh lời</div></div>
          </div>
          <div class="trust rel">${P(2)}
            <div class="row"><i class="ri-shield-check-fill"></i>Người nhận quen, đã chuyển 6 lần từ tháng 4</div>
            <div class="row"><i class="ri-shield-check-fill"></i>Tên tài khoản khớp với người nhận đã lưu</div>
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
    keep: "QR là giao dịch có tần suất cao nhất. Mỗi lần trả bằng TCB phải có lợi thấy ngay: hoàn tiền và U-Point hiện trước khi trả.",
    why: "Ưu đãi đang tản mát ở nhiều nơi. Đưa đúng ưu đãi vào đúng lúc thanh toán, khách hàng không cần đi tìm.",
    tags: [["ctx", "Contextual"], ["auto", "Auto-action"]],
    notes: [
      "Nhận diện cửa hàng từ mã QR và vị trí. Ưu đãi phù hợp tự hiện trong luồng thanh toán.",
      "Số tiền được hoàn và U-Point hiện trước khi trả. Lợi ích của việc trả bằng TCB hiện ngay ở đây.",
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
          <div class="offer rel">${P(1)}${im("banner-auto-earning-u.png", "")}<div class="grow"><b>Hoàn 15% khi trả bằng QR</b><div class="xs">Đã tự áp dụng. Kèm +55 U-Point.</div></div><i class="ri-checkbox-circle-fill" style="font-size:22px"></i></div>
          <div class="row sp sm rel" style="padding:0 4px">${P(2, "l")}<span style="color:#71717a">Bạn trả</span><span><s style="color:#a1a1aa">65,000</s> <b>55,250 VND</b></span></div>
          <div class="btn" data-go="cal">Thanh toán 55,250</div>
          <div class="row sp sm rel" style="padding:2px 4px">${P(3, "l")}<span style="color:#71717a">12 ưu đãi khác gần bạn</span><b data-go="cal">Mở Growth hub</b></div>
        </div>
      </div>`,
  },
  {
    id: "cal", m: 3, name: "Lịch tài chính",
    keep: "Hóa đơn tự động là “mỏ neo” giữ khách hàng ở một ngân hàng. Mỗi hóa đơn bật tự động qua TCB là một lý do để lương ở lại đủ trả nó.",
    why: "Một nơi duy nhất cho mọi khoản định kỳ, tính theo kỳ lương chứ không theo tháng dương lịch.",
    tags: [["nav", "Self-service navigation"], ["auto", "Auto-action"]],
    notes: [
      "Lịch đi từ ngày lương đến ngày lương. Chấm màu phân biệt hóa đơn, kỳ thẻ và ưu đãi.",
      "Hóa đơn được nhận diện từ chính giao dịch tại TCB: thanh toán hóa đơn và chi tiêu bằng thẻ TCB. Trạng thái rõ ràng: đã trích, tự động, trả tay, cần trả.",
      "Khoản khách hàng trả tay nhiều tháng qua TCB được gợi ý bật tự động. Hóa đơn chưa từng trả qua TCB thì khách hàng tự thêm từ danh sách nhà cung cấp.",
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
            <div class="ev"><div class="date">25<small>CN</small></div><div><b class="sm">Tiền điện EVN</b><div class="xs muted">khoảng 650,000</div></div><span class="st due">Trả tay</span></div>
            <div class="ev" style="border:0"><div class="date">31<small>T7</small></div><div><b class="sm">Netflix, iCloud</b><div class="xs muted">480,000, qua thẻ TCB</div></div><span class="st auto">Tự động</span></div>
          </div>
          <div class="switch rel" data-go="alert">${P(3)}
            <div class="row">${im("action-paybills.png")}<div class="grow"><b class="sm">Tiền điện EVN: bạn trả tay 3 tháng liền</b><div class="xs" style="color:#3f3f46">Bật tự động thanh toán để không lo trễ hạn, x2 U-Point tháng đầu.</div></div></div>
            <div class="row" style="gap:6px"><span class="pill k">Bật tự động</span><span class="pill o" style="color:#000">Thêm hóa đơn khác</span></div>
          </div>
        </div>
        ${bb("“Tháng này còn hóa đơn nào?”")}
      </div>`,
  },

  /* ===== 4. Cuối tháng ===== */
  {
    id: "alert", m: 4, name: "Cảnh báo dòng tiền",
    keep: "Dự báo chỉ chính xác khi chi tiêu diễn ra ở TCB. Đây là lợi ích chỉ có khi lương ở lại, và là lý do để chuyển thêm chi tiêu về.",
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
    keep: "Hạn mức được duyệt trước nhờ lịch sử lương ở TCB. Lương ở lại càng lâu, hạn mức càng tốt, nên thẻ trở thành lý do để tiếp tục ở lại.",
    why: "Thẻ tín dụng xuất hiện đúng lúc cần, với số tiền vừa đủ và giới hạn an toàn do chính khách hàng đặt.",
    tags: [["trust", "Trust & transparency"], ["ctx", "Contextual"]],
    notes: [
      "Thẻ được đề xuất theo đúng khoản thiếu, duyệt trước nhờ 8 tháng lương về TCB. Lịch sử lương là lợi thế riêng của TCB.",
      "Mô phỏng chi phí: trả đúng hạn thì 0đ lãi, trả chậm thì tốn bao nhiêu. Kéo để đổi số tiền.",
      "Giới hạn an toàn: tự đặt hạn mức chi mỗi tháng và cảnh báo khi chạm 80%.",
    ],
    html: () => `
      <div class="scr">${sb()}${back("alert", "Bù thiếu hụt bằng thẻ")}
        <div class="body" style="gap:10px">
          <div class="cc rel">${P(1, "tl")}<div class="row sp"><img class="logo" src="${LOGO}" alt="" style="margin-left:26px"><span class="xs" style="background:rgba(0,0,0,.3);padding:4px 10px;border-radius:999px">Đã duyệt trước</span></div><div class="chip2"></div><div class="row sp xs"><span>Duyệt trước nhờ 8 tháng lương về TCB</span><span>Mở trong 2 phút</span></div></div>
          <div class="sim rel">${P(2)}
            <div class="row sp sm"><b>Nếu bạn chi bằng thẻ</b><b style="font-size:18px">1,200,000</b></div>
            <div class="range"><i></i><b></b></div>
            <div class="cmp"><div>Trả trước 15/11<b style="color:#4ade80">0đ lãi</b></div><div>Trả chậm 1 tháng<b style="color:#ff656b">khoảng 36,000</b></div></div>
            <div class="xs muted">Khoản trả thẻ sẽ tự thêm vào kế hoạch lương ngày 5/11.</div>
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
    keep: "Lần đầu khách hàng thấy bằng tiền thật việc để lương ở TCB mang lại gì. Tháng sau họ có lý do để tiếp tục.",
    why: "Mở đầu phần nhìn lại bằng điều khách hàng đã nhận được, rồi mới đến câu hỏi tiền đi đâu.",
    tags: [["emo", "Emotional & personal"], ["ctx", "Contextual"]],
    notes: [
      "Recap mở bằng lợi ích đã nhận, tối ngày 4, trước kỳ lương mới. Ghi nhận thay vì phán xét.",
      "Lợi ích nói bằng tiền thật: lãi và U-Point đã nhận. So với tháng trước và mục tiêu tháng sau.",
      "Slide tiếp theo dẫn sang câu hỏi “tiền đi đâu” với trợ lý AI.",
    ],
    html: () => `
      <div class="scr story">${sb()}
        <div class="story-bars"><i class="on"></i><i class="on"></i><i></i><i></i><i></i></div>
        <div class="story-top"><img src="${LOGO}" alt=""><b>Tháng 10 của Minh</b><i class="ri-close-line" style="margin-left:auto;font-size:22px"></i></div>
        <div class="story-main rel" data-go="ai">${P(1, "in")}
          <div class="k">Tháng 10, lương của bạn đã tự sinh lời</div>
          <div class="big">+58k</div>
          <div class="line rel">${P(2)}trong lúc chờ chi tiêu. Bạn còn nhận thêm 1,240 U-Point từ QR và hóa đơn.</div>
          <div class="cmpbars">
            <div><span>Tháng 9</span><i style="height:13%"></i><b>+9k</b></div>
            <div class="now"><span>Tháng 10</span><i style="height:83%"></i><b>+58k</b></div>
            <div class="tgt"><span>Mục tiêu tháng 11</span><i style="height:100%"></i><b>+70k</b></div>
          </div>
        </div>
        <div class="foot rel">${P(3, "in")}<div class="btn" data-go="ai"><img src="${LOGO}" alt="" style="width:22px">Xem tiền đã đi đâu</div></div>
      </div>`,
  },
  {
    id: "ai", m: 5, name: "Hỏi trợ lý AI",
    keep: "Câu trả lời chỉ đầy đủ khi chi tiêu diễn ra ở TCB. Đây là giá trị chỉ có khi lương ở lại, và là lý do để chi tiêu nhiều hơn qua TCB.",
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
    keep: "Insight do chính khách hàng tạo là lý do để mở app TCB mỗi ngày, kể cả khi chưa phải toàn bộ tiền đều ở đây.",
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
    keep: "Tiền tiết kiệm được dẫn vào hũ tại TCB. Kế hoạch tháng 11 giữ lại nhiều hơn tháng 10.",
    why: "Từ hiểu đến hành động. Gợi ý được áp dụng thẳng vào kế hoạch lương tháng sau, khép lại vòng lặp của hành trình.",
    tags: [["trust", "Trust & transparency"], ["auto", "Auto-action"], ["ai", "AI xuyên suốt"]],
    notes: [
      "Cơ cấu chi tiêu theo nhóm, nhìn một lần là thấy nhóm lớn nhất.",
      "Theo dõi ngân sách từng nhóm. Nhóm vượt ngân sách được đánh dấu đỏ.",
      "Gợi ý có mức tiết kiệm dự kiến và dẫn thẳng vào hũ tại TCB. “Áp dụng” cập nhật kế hoạch lương ngày 5/11.",
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
            <b>Bớt 2 đơn giao đồ ăn mỗi tuần, để 640,000 vào hũ Đà Lạt. Đến đích sớm 1 tháng.</b>
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
  const pts = [[5, 1, 1], [5.5, 0.45, 0.93], [6, 0.2, 0.84], [9, 0.17, 0.79], [15, 0.12, 0.64], [20, 0.08, 0.52], [24, 0.05, 0.42], [28, 0.03, 0.36], [2, 0.02, 0.32], [4, 0.01, 0.3]];
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
  s += '<text class="zone" x="' + (X0 - 22) + '" y="' + (Y0 + 4) + '" text-anchor="end">100%</text>';
  s += '<text class="zone" x="' + (X0 - 22) + '" y="' + (Y1) + '" text-anchor="end">0%</text>';
  ticks.forEach((d) => {
    const x = dayX(d);
    s += '<line class="axis" x1="' + x + '" y1="' + Y1 + '" x2="' + x + '" y2="' + (Y1 + 6) + '"/>';
    s += '<text class="tick" x="' + x + '" y="' + (Y1 + 22) + '" text-anchor="middle">' + d + (d === 5 ? "/10" : d === 4 ? "/11" : "") + "</text>";
  });
  // shaded month-end zone
  s += '<rect x="' + dayX(24) + '" y="' + Y0 + '" width="' + (dayX(4) - dayX(24)) + '" height="' + (Y1 - Y0) + '" fill="#e3262f" opacity="0.05" rx="10"/>';
  s += '<defs><linearGradient id="keepFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ed1c24" stop-opacity="0.32"/><stop offset="1" stop-color="#ed1c24" stop-opacity="0"/></linearGradient></defs>';
  s += '<path d="' + path(2) + " L" + X1 + "," + Y1 + " L" + X0 + "," + Y1 + ' Z" fill="url(#keepFill)"/>';
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
  s += '<text class="quote" x="' + (dayX(6) + 14) + '" y="' + val(0.3) + '">Lương về rồi đi: số dư giảm gần hết sau 1–2 ngày</text>';
  s += '<text class="ann" x="' + dayX(17) + '" y="' + (val(0.6) + 34) + '" text-anchor="middle">Chi tiêu, hóa đơn và hũ tiết kiệm vẫn diễn ra tại TCB</text>';
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
    ["Vì sao lương không ở lại", (m) => m.leak, "leak"],
    ["Đòn bẩy giữ chân", (m) => m.lever, "lever"],
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
            <div class="keep"><b>Giữ lương ở lại TCB</b>${s.keep}</div>
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
  document.getElementById("nowKeep").textContent = s.keep;
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
