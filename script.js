// ==========================================
// CẤU HÌNH DỮ LIỆU TRANG WEB (CHỈNH SỬA TẠI ĐÂY)
// ==========================================
const CONFIG = {
  brand: "Nguyxn An 💸",
  heroTitle: "OB55",
  heroDescription: "File Siêu Bá. Kho config, tài nguyên được tuyển chọn kỹ lưỡng, link tải tốc độ cao, giao diện tối giản chuẩn deep red.",
  visits: "36M+",
  admin: {
    name: "Nguyxn An💸",
    desc: "Admin hỗ trợ link tải, mật khẩu và cập nhật file mới. Nhắn tin trực tiếp qua TikTok.",
    avatar: "avatar.jpg",
    links: [
      { label: "TikTok", url: "https://www.tiktok.com/@nguyenancute6" }
    ]
  },
  files: [
    {
      id: "f1",
      name: "App Flork",
      desc: "Ứng dụng Flork bản v1.0 mới nhất, hỗ trợ tải nhanh và mượt mà.",
      type: "ZIP",
      tier: "free",
      badges: [
        { text: "FREE", class: "badge-free" },
        { text: "MỚI", class: "badge-new" }
      ],
      isNew: true,
      hasTask: false,
      password: "",
      downloadUrl: "https://www.mediafire.com/file/u5fscjaap621cz0/Flork_1.0_%25281%2529.zip/file"
    },
    {
      id: "f2",
      name: "AimLock Idol Rinkivana 800K ADR",
      desc: "Bản AimLock cực nhạy từ Idol Rinkivana, kéo tâm mượt mà, hỗ trợ giải nén dán data.",
      type: "ZIP",
      tier: "idol",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "ADR", class: "badge-adr" }
      ],
      isNew: true,
      hasTask: false,
      password: "AimlockRin",
      downloadUrl: "https://www.mediafire.com/file/pout1go9yl2bj0i/Aimlock_Mode__850K.zip/file"
    },
    {
      id: "f3",
      name: "AimLock Idol Tank Supper 500K ADR",
      desc: "Bản AimLock Tank Supper 500K cho Android, chuẩn form bám tâm ghim đầu cực căng.",
      type: "ZIP",
      tier: "idol",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "ADR", class: "badge-adr" }
      ],
      isNew: true,
      hasTask: false,
      password: "Tank500k",
      downloadUrl: "https://www.mediafire.com/file/mubhia4v5a7tzbt/Aimlock_Tank_Supper.zip/file"
    },
    {
      id: "f4",
      name: "AimLock Idol Tiến Bờ Rai 500K",
      desc: "Phiên bản AIMLOCK V4 Tiến Bờ Rai siêu hot, độ nhạy cao và ổn định.",
      type: "ZIP",
      tier: "idol",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" }
      ],
      isNew: true,
      hasTask: false,
      password: "TBR500K",
      downloadUrl: "https://www.mediafire.com/file/79qnn02ecqacojq/%F0%9D%99%B0%F0%9D%99%B8%F0%9D%99%BC%F0%9D%99%BB%F0%9D%99%BE%F0%9D%99%B2%F0%9D%99%BA+V4+TBR.zip/file"
    },
    {
      id: "f5",
      name: "AimLock Idol Mập Hài Hước 500K ADR",
      desc: "Bản AimLock Idol Mập Hài Hước 500K cực hot, kèm video hướng dẫn cách cài chi tiết.",
      type: "7Z",
      tier: "vip",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "VIP", class: "badge-vip" },
        { text: "ADR", class: "badge-adr" }
      ],
      isNew: true,
      hasTask: false,
      password: "aimlockvip500kmaphaihuocob55",
      downloadUrl: "https://www.mediafire.com/file/jpru2z9cn72gh0u/Aimlock_500k_MHH.7z/file",
      guideUrl: "https://www.mediafire.com/file/gep682j6djr3mwz/1WUpukp0gU8yJCmEAm8yTINAofn8P3e92mu1g30o6KcKOWMa5Vy6gvbirGpiKv0345a.mp4/file"
    },
    {
      id: "f6",
      name: "AimLock HyperLock Idol View Anh 200k Ios",
      desc: "Bản HyperLock cài trực tiếp cấu hình Mobileconfig cực mượt dành riêng cho iOS.",
      type: "CFG",
      tier: "vip",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "VIP", class: "badge-vip" },
        { text: "iOS", class: "badge-ios" }
      ],
      isNew: true,
      hasTask: false,
      password: "",
      downloadUrl: "https://www.mediafire.com/file/brsknceb0ocrai7/%25F0%259D%2597%259B%25F0%259D%2598%2586%25F0%259D%2597%25BD%25F0%259D%2597%25B2%25F0%259D%2597%25BF%25F0%259D%2597%259F%25F0%259D%2597%25BC%25F0%259D%2597%25B0%25F0%259D%2597%25B8_%25F0%259D%259F%25AE%25F0%259D%259F%25AC%25F0%259D%259F%25AC%25F0%259D%2597%25B8%25F0%259F%258D%258F.mobileconfig/file"
    },
    {
      id: "f7",
      name: "DPI Idol Nextor 1M Ios",
      desc: "Video hướng dẫn thiết lập DPI Nextor 1M siêu đỉnh, nhạy màn bám tâm iOS.",
      type: "MP4",
      tier: "vip",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "VIP", class: "badge-vip" },
        { text: "DPI XỊN", class: "badge-dpixin" },
        { text: "iOS", class: "badge-ios" }
      ],
      isNew: true,
      hasTask: false,
      password: "",
      downloadUrl: "https://www.mediafire.com/file/luqa22dkqg36nj1/VIDEO_DOWNLOAD_1792243253948_1792244978079.mp4/file"
    },
    {
      id: "f8",
      name: "AimLock Idol Tiến Bờ Roai 400K Ios",
      desc: "Bản AimLock Tiến Bờ Roai 400K cho iOS, nhẹ tâm, ghim đầu cực nhạy.",
      type: "ZIP",
      tier: "vip",
      badges: [
        { text: "IDOL", class: "badge-idol" },
        { text: "MỚI", class: "badge-new" },
        { text: "VIP", class: "badge-vip" },
        { text: "iOS", class: "badge-ios" }
      ],
      isNew: true,
      hasTask: false,
      password: "1",
      downloadUrl: "https://www.mediafire.com/file/bdzepd49m12sarm/asdnsakdwicnasl.zip/file"
    }
  ]
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentFilter = 'all';
let selectedFile = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Bind Header & Stats
  document.getElementById("brandTitle").textContent = CONFIG.brand;
  document.getElementById("heroDesc").textContent = CONFIG.heroDescription;
  document.getElementById("statVisits").textContent = CONFIG.visits;
  document.getElementById("statFilesCount").textContent = CONFIG.files.length;
  document.getElementById("tabFileCount").textContent = CONFIG.files.length;

  // Bind Admin Tab Info
  document.getElementById("adminName").textContent = CONFIG.admin.name;
  document.getElementById("adminDesc").textContent = CONFIG.admin.desc;
  document.getElementById("adminAvatar").src = CONFIG.admin.avatar;

  const adminLinksContainer = document.getElementById("adminLinks");
  adminLinksContainer.innerHTML = CONFIG.admin.links.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link-btn">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></svg>
      <span>${link.label}</span>
    </a>
  `).join("");

  // Render Files
  renderFiles();
});

// ==========================================
// TAB SWITCHING
// ==========================================
function switchTab(tabId) {
  // Update nav tabs
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });

  // Update panels
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === `tab-${tabId}`);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByTier(tier) {
  switchTab("files");
  setFilter(tier);
}

// ==========================================
// FILTER LOGIC
// ==========================================
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
  });
  renderFiles();
}

// ==========================================
// FILE RENDERING
// ==========================================
function renderFiles() {
  const container = document.getElementById("fileGrid");
  
  const filtered = CONFIG.files.filter(f => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'new') return f.isNew;
    if (currentFilter === 'idol') return (f.badges && f.badges.some(b => b.text === 'IDOL')) || f.tier === 'idol';
    if (currentFilter === 'vip') return (f.badges && f.badges.some(b => b.text === 'VIP')) || f.tier === 'vip';
    if (currentFilter === 'free') return (f.badges && f.badges.some(b => b.text === 'FREE')) || f.tier === 'free';
    if (currentFilter === 'ios') return f.badges && f.badges.some(b => b.text === 'iOS');
    if (currentFilter === 'adr') return f.badges && f.badges.some(b => b.text === 'ADR');
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 40px;">Không có file nào trong mục này.</div>`;
    return;
  }

  container.innerHTML = filtered.map(file => {
    const isVip = file.tier === 'vip' || (file.badges && file.badges.some(b => b.text === 'VIP'));
    const badgesHtml = file.badges 
      ? file.badges.map(b => `<span class="badge-tag ${b.class}">${b.text}</span>`).join(" ")
      : `<span class="badge-tag ${file.tier === 'vip' ? 'badge-vip' : file.tier === 'idol' ? 'badge-idol' : 'badge-free'}">${(file.tier || '').toUpperCase()}</span>${file.isNew ? ' <span class="badge-tag badge-new">MỚI</span>' : ''}`;
    const hasPassword = Boolean(file.password);

    return `
      <div class="file-card">
        <div class="file-icon-box">${file.type}</div>
        <div class="file-body">
          <div class="file-top">
            <span class="file-name">${file.name}</span>
            ${badgesHtml}
          </div>
          <div class="file-desc">${file.desc}</div>
          <div class="file-footer">
            <div class="file-meta-info">
              <span class="lock-info">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  ${hasPassword 
                    ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' 
                    : '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'}
                </svg>
                ${hasPassword ? '••••••••••' : 'Không mật khẩu'}
              </span>
            </div>
            <div class="file-actions">
              ${file.hasTask 
                ? `<button class="btn btn-sm btn-task" onclick="handleTask('${file.id}')">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                     <span>${file.taskLabel || 'Làm nhiệm vụ'}</span>
                   </button>`
                : `<button class="btn btn-sm btn-primary" onclick="openDownloadModal('${file.id}')">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                     <span>${isVip ? 'Lấy file' : 'Tải ngay'}</span>
                   </button>`
              }
              <button class="icon-btn-round" title="Sao chép liên kết" onclick="copyFileLink('${file.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// MODAL & DOWNLOAD ACTIONS
// ==========================================
function openDownloadModal(fileId) {
  selectedFile = CONFIG.files.find(f => f.id === fileId);
  if (!selectedFile) return;

  const modal = document.getElementById("downloadModal");
  const modalFileName = document.getElementById("modalFileName");
  const passContainer = document.getElementById("passContainer");
  const modalPasswordText = document.getElementById("modalPasswordText");
  const modalHint = document.getElementById("modalHint");
  const modalGuideBtn = document.getElementById("modalGuideBtn");

  modalFileName.textContent = selectedFile.name;

  if (selectedFile.password) {
    passContainer.style.display = "flex";
    modalPasswordText.textContent = selectedFile.password;
    modalHint.textContent = "Sao chép mật khẩu bên dưới trước khi mở link tải file.";
  } else {
    passContainer.style.display = "none";
    modalHint.textContent = "File này không yêu cầu mật khẩu. Bạn có thể mở link tải ngay.";
  }

  if (modalGuideBtn) {
    if (selectedFile.guideUrl) {
      modalGuideBtn.style.display = "flex";
    } else {
      modalGuideBtn.style.display = "none";
    }
  }

  modal.classList.add("active");
}

function openGuideLink() {
  if (selectedFile && selectedFile.guideUrl) {
    window.open(selectedFile.guideUrl, "_blank");
  }
}

function closeModal() {
  const modal = document.getElementById("downloadModal");
  modal.classList.remove("active");
}

function copyPassword() {
  if (!selectedFile || !selectedFile.password) return;
  navigator.clipboard.writeText(selectedFile.password).then(() => {
    document.getElementById("copyBtnLabel").textContent = "Đã chép!";
    showToast("📋 Đã sao chép mật khẩu vào bộ nhớ tạm");
    setTimeout(() => {
      document.getElementById("copyBtnLabel").textContent = "Sao chép";
    }, 2000);
  });
}

function proceedToDownload() {
  if (!selectedFile) return;
  window.open(selectedFile.downloadUrl, "_blank");
  closeModal();
}

function handleTask(fileId) {
  const file = CONFIG.files.find(f => f.id === fileId);
  if (!file) return;
  showToast("Đang chuyển hướng để làm nhiệm vụ...");
  setTimeout(() => {
    window.open(file.taskUrl, "_blank");
    // Mở luôn modal để sẵn sàng mật khẩu
    openDownloadModal(fileId);
  }, 600);
}

function copyFileLink(fileId) {
  const file = CONFIG.files.find(f => f.id === fileId);
  if (!file) return;
  navigator.clipboard.writeText(file.downloadUrl).then(() => {
    showToast("🔗 Đã sao chép link tải vào bộ nhớ tạm");
  });
}

// ==========================================
// TOAST NOTICE
// ==========================================
function showToast(msg) {
  const toast = document.getElementById("toastNotice");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}
