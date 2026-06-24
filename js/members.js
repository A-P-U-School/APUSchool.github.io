const cls = {
  col: "w-full md:w-1/2 lg:w-1/3 p-4",
  card: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out h-full flex flex-col",
  img: "w-full h-56 object-cover object-center",
  body: "p-6 flex flex-col flex-grow",
  name: "font-bold text-3xl text-gray-900 leading-tight whitespace-nowrap",
  ruby: "text-sm text-gray-600 leading-relaxed whitespace-nowrap",
  roman: "text-sm text-gray-500 leading-relaxed whitespace-nowrap"
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
  names.className = "mb-4";
  names.append(text("h3", cls.name, member.name));
  names.append(text("p", cls.ruby, member.kana));
  names.append(text("p", cls.roman, member.roman));
  body.appendChild(names);

  body.append(text("p", "text-sm text-gray-600 mb-4", member.dept));
  body.append(text("p", "text-gray-700 text-base flex-grow", member.message));

  if (member.certs) {
    const certs = document.createElement("div");
    certs.className = "mt-6 pt-4 border-t";
    certs.append(text("p", "text-xs text-gray-600 font-bold", "所持資格:"));
    certs.append(text("p", "text-sm text-gray-800", member.certs));
    body.appendChild(certs);
  }

  return outer;
}

function soonCard() {
  const outer = document.createElement("div");
  outer.className = cls.col;

  outer.innerHTML = `
    <div class="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col border-2 border-dashed border-gray-300 opacity-75">
      <div class="w-full h-56 bg-gray-100 flex items-center justify-center">
        <svg class="w-20 h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </div>
      <div class="p-6 flex flex-col flex-grow justify-center items-center text-center">
        <h3 class="font-bold text-2xl text-gray-500 mb-2">Coming Soon...</h3>
        <p class="text-gray-500 text-base">
          大学1年生から大学院生まで，80名を超えるメンバーが学習のサポートをさせていただきます！<br>
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
