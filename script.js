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
      badgeText: "IDOL",
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
      badgeText: "IDOL",
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
      badgeText: "IDOL",
      isNew: true,
      hasTask: false,
      password: "TBR500K",
      downloadUrl: "https://www.mediafire.com/file/79qnn02ecqacojq/%F0%9D%99%B0%F0%9D%99%B8%F0%9D%99%BC%F0%9D%99%BB%F0%9D%99%BE%F0%9D%99%B2%F0%9D%99%BA+V4+TBR.zip/file"
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
    if (currentFilter === 'idol') return f.tier === 'idol';
    if (currentFilter === 'vip') return f.tier === 'vip';
    if (currentFilter === 'free') return f.tier === 'free';
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 40px;">Không có file nào trong mục này.</div>`;
    return;
  }

  container.innerHTML = filtered.map(file => {
    const isVip = file.tier === 'vip';
    let badgeClass = 'badge-free';
    let badgeLabel = file.tier.toUpperCase();
    if (file.tier === 'vip') {
      badgeClass = 'badge-vip';
    } else if (file.tier === 'idol') {
      badgeClass = 'badge-idol';
      badgeLabel = file.badgeText || 'IDOL';
    }
    const hasPassword = Boolean(file.password);

    return `
      <div class="file-card">
        <div class="file-icon-box">${file.type}</div>
        <div class="file-body">
          <div class="file-top">
            <span class="file-name">${file.name}</span>
            <span class="badge-tag ${badgeClass}">${badgeLabel}</span>
            ${file.isNew ? '<span class="badge-tag badge-new">MỚI</span>' : ''}
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

  modalFileName.textContent = selectedFile.name;

  if (selectedFile.password) {
    passContainer.style.display = "flex";
    modalPasswordText.textContent = selectedFile.password;
    modalHint.textContent = "Sao chép mật khẩu bên dưới trước khi mở link tải file.";
  } else {
    passContainer.style.display = "none";
    modalHint.textContent = "File này không yêu cầu mật khẩu. Bạn có thể mở link tải ngay.";
  }

  modal.classList.add("active");
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
