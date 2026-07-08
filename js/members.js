const cls = {
  col: "member-column",
  card: "member-card",
  img: "member-photo",
  body: "member-card-body",
  name: "member-name",
  ruby: "member-kana",
  roman: "member-roman"
};

function text(tag, className, value) {
  const el = document.createElement(tag);
  el.className = className;
  el.textContent = value;
  return el;
}

function memberCard(member) {
  const outer = document.createElement("div");
  outer.className = cls.col;

  const card = document.createElement("div");
  card.className = cls.card;
  outer.appendChild(card);

  const img = document.createElement("img");
  img.className = cls.img;
  img.src = member.photo;
  img.alt = member.alt || `${member.name}のプロフィール写真`;
  card.appendChild(img);

  const body = document.createElement("div");
  body.className = cls.body;
  card.appendChild(body);

  const names = document.createElement("div");
  names.className = "member-heading";
  names.append(text("h3", cls.name, member.name));
  names.append(text("p", cls.ruby, member.kana));
  names.append(text("p", cls.roman, member.roman));
  body.appendChild(names);

  body.append(text("p", "member-department member-text", member.dept));
  body.append(text("p", "member-message member-text", member.message));

  if (member.certs) {
    const certs = document.createElement("div");
    certs.className = "member-certs";
    certs.append(text("p", "member-certs-label", "所持資格"));
    certs.append(text("p", "member-text", member.certs));
    body.appendChild(certs);
  }

  return outer;
}

function soonCard() {
  const outer = document.createElement("div");
  outer.className = cls.col;

  outer.innerHTML = `
    <div class="member-card member-card--soon">
      <div class="member-soon-icon">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </div>
      <div class="member-card-body member-soon-body">
        <h3>And more...</h3>
        <p>
          運営メンバー以外にも大学1年生から大学院生まで，80名を超えるメンバーが学習のサポートをさせていただきます！
        </p>
      </div>
    </div>
  `;

  return outer;
}

function renderMembers() {
  const list = document.getElementById("members-list");
  if (!list) {
    return;
  }

  // カードの見た目はここ、内容は members-data.js に分けて管理する。
  list.textContent = "";
  const members = window.memberData || [];
  members.forEach((member) => {
    list.appendChild(memberCard(member));
  });
  list.appendChild(soonCard());
}

document.addEventListener("DOMContentLoaded", renderMembers);
