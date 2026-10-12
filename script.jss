/**
 * GRURU MUSEUM — Interactive Engine (script.js)
 * Features:
 * 1. Data Booming Radial Explosion Simulator (HALL 02)
 * 2. 6-Dimension Force-Directed Knowledge Graph (HALL 03)
 * 3. Topic Switcher & Specimen Detail Modal
 */

// ==========================================================================
// 1. DATA BOOMING ENGINE (HALL 02)
// ==========================================================================

const boomingTopics = {
  ferment: {
    title: "ภูมิปัญญาการหมักดองไทย",
    cat: "CULT",
    tier1: [
      { id: 1, label: "จุลชีววิทยา & ยีสต์ธรรมชาติ", cat: "SCI", color: "#2EE6FF", desc: "แบคทีเรียกลุ่มแลคโตบาซิลลัสในกระบวนการหมัก" },
      { id: 2, label: "เส้นทางเครื่องเทศอยุธยา", cat: "HIST", color: "#FF5A1F", desc: "การค้าข้ามสมุทรที่ผสานเกลือและสมุนไพรเข้าด้วยกัน" },
      { id: 3, label: "เทคโนโลยีถนอมอาหารระดับเซลล์", cat: "TECH", color: "#8C6BFF", desc: "วิศวกรรมการควบคุมค่า pH และความชื้นสัมพัทธ์" },
      { id: 4, label: "ตำรับใบลานพื้นบ้าน 4 ภาค", cat: "CULT", color: "#FFC233", desc: "การถนอมอาหารตามฤดูกาลของชุมชนท้องถิ่น" },
      { id: 5, label: "ไมโครไบโอม & ระบบย่อยอาหาร", cat: "BIO", color: "#34E89E", desc: "ความสัมพันธ์ระหว่างโพรไบโอติกส์กับการทำงานของลำไส้" },
      { id: 6, label: "เครื่องปั้นดินเผา & หม้อหมัก", cat: "ART", color: "#FF5FA2", desc: "ดีไซน์ปากไหที่ใช้น้ำหล่อผนึกสุญญากาศ" }
    ],
    tier2: [
      { id: 7, label: "แกนสมอง-ลำไส้ (Gut-Brain Axis)", cat: "SCI", color: "#2EE6FF", desc: "สารสื่อประสาทซีโรโทนิน 90% ผลิตในระบบทางเดินอาหาร" },
      { id: 8, label: "บันทึกราชทูตลาลูแบร์ (1687)", cat: "HIST", color: "#FF5A1F", desc: "บันทึกเรื่องปลาร้าและน้ำปลาในสยามโบราณ" },
      { id: 9, label: "ไบโอรีแอคเตอร์ระดับอุตสาหกรรม", cat: "TECH", color: "#8C6BFF", desc: "การเพาะเลี้ยงเชื้อจุลินทรีย์ความบริสุทธิ์สูง" },
      { id: 10, label: "วัฒนธรรมข้าวและน้ำส้มสายชู", cat: "CULT", color: "#FFC233", desc: "การหมักสารสกัดจากส่าข้าวเหนียวดำ" }
    ],
    tier3: [
      { id: 11, label: "Everyday Takeaway: สูตรบูสต์พลังงานเช้า", cat: "BIO", color: "#D7FF3A", desc: "ทานอาหารหมักธรรมชาติ 1 ช้อนโต๊ะช่วยฟื้นฟูสมองช่วงบ่าย" },
      { id: 12, label: "Smart Living: ตู้บ่มอาหารคุมอุณหภูมิ", cat: "TECH", color: "#D7FF3A", desc: "การควบคุมจุลินทรีย์ในห้องครัวบ้านยุคใหม่" }
    ]
  },
  plant: {
    title: "พฤกษศาสตร์โมเลกุลและการสังเคราะห์แสง",
    cat: "BIO",
    tier1: [
      { id: 1, label: "คลอโรพลาสต์ & สารสี", cat: "SCI", color: "#2EE6FF", desc: "การดูดกลืนพลังงานแสงของเม็ดสีพืช" },
      { id: 2, label: "การปฏิวัติเกษตรกรรมกรีนเรฟโวลูชั่น", cat: "HIST", color: "#FF5A1F", desc: "การปรับปรุงพันธุ์พืชหลังสงครามโลก" },
      { id: 3, label: "ระบบสังเคราะห์แสงประดิษฐ์", cat: "TECH", color: "#8C6BFF", desc: "การดักจับ CO2 ด้วยเซลล์แสงอาทิตย์ชีวภาพ" },
      { id: 4, label: "สมุนไพรตำรายาแผนไทย", cat: "CULT", color: "#FFC233", desc: "การใช้สรรพคุณใบและรากในระบบธาตุเจ้าเรือน" },
      { id: 5, label: "วงจรสัตว์-พืช-ระบบนิเวศ", cat: "BIO", color: "#34E89E", desc: "การผลิตออกซิเจนและกักเก็บคาร์บอน" },
      { id: 6, label: "ลวดลายใบไม้ในศิลปะไทย", cat: "ART", color: "#FF5FA2", desc: "ลายกนกเทศและลายกระจังที่ถอดรูปจากใบไม้" }
    ],
    tier2: [
      { id: 7, label: "วงจรคัลวิน (Calvin Cycle)", cat: "SCI", color: "#2EE6FF", desc: "การเปลี่ยน CO2 เป็นกลูโคสในระดับโมเลกุล" },
      { id: 8, label: "Vertical Indoor Farming", cat: "TECH", color: "#8C6BFF", desc: "การปลูกพืชแนวตั้งด้วยสเปกตรัมแสง LED" },
      { id: 9, label: "เกษตรทฤษฎีใหม่ & ป่า 3 อย่าง", cat: "CULT", color: "#FFC233", desc: "การปลูกพืชผสมผสานเพื่อความยั่งยืนของดิน" }
    ],
    tier3: [
      { id: 10, label: "Everyday Takeaway: ต้นไม้ฟอกอากาศในคอนโด", cat: "BIO", color: "#D7FF3A", desc: "ลิ้นมังกรและพลูด่างช่วยลด CO2 ยามค่ำคืนอย่างเห็นผล" }
    ]
  },
  ai: {
    title: "ปัญญาประดิษฐ์และโครงข่ายความรู้มนุษย์",
    cat: "TECH",
    tier1: [
      { id: 1, label: "Semantic Web & กราฟความรู้", cat: "SCI", color: "#2EE6FF", desc: "การจัดเก็บความสัมพันธ์ของข้อมูลแบบออนโทโลยี" },
      { id: 2, label: "ประวัติศาสตร์เครื่องคิดเลขสู่ทัวริง", cat: "HIST", color: "#FF5A1F", desc: "วิวัฒนาการการคำนวณของมนุษย์จากอดีต" },
      { id: 3, label: "โมเดลภาษาขนาดใหญ่ (LLM)", cat: "TECH", color: "#8C6BFF", desc: "การแปลงคำเป็นเวกเตอร์มิติสูง" },
      { id: 4, label: "คลังปัญญามุขปาฐะของชนชาติ", cat: "CULT", color: "#FFC233", desc: "การบันทึกเสียงและเรื่องเล่าพื้นบ้านสู่ดิจิทัล" },
      { id: 5, label: "โครงข่ายประสาทชีวภาพ", cat: "BIO", color: "#34E89E", desc: "ซินแนปส์ในสมองต้นแบบของ Deep Learning" },
      { id: 6, label: "การออกแบบ Generative UI", cat: "ART", color: "#FF5FA2", desc: "อินเทอร์เฟซที่ปรับเปลี่ยนตามบริบทผู้ใช้งาน" }
    ],
    tier2: [
      { id: 7, label: "Vector Search & Retrieval (RAG)", cat: "TECH", color: "#8C6BFF", desc: "การดึงข้อมูลจากเอกสารตรวจสอบได้มาประกอบคำตอบ" },
      { id: 8, label: "จริยธรรมข้อมูลและสิทธิความเป็นส่วนตัว", cat: "CULT", color: "#FFC233", desc: "การควบคุมความโปร่งใสของอัลกอริทึม" }
    ],
    tier3: [
      { id: 9, label: "Everyday Takeaway: AI Co-Pilot ทำงานฉลาดขึ้น 3 เท่า", cat: "TECH", color: "#D7FF3A", desc: "ใช้ Prompt ถามหาโครงสร้างความสัมพันธ์แทนการหาข้อความสั้น" }
    ]
  }
};

let currentBoomingTopic = 'ferment';
let boomingCanvas, boomingCtx;
let boomingNodes = [];
let boomingEdges = [];
let boomingAnimFrame = null;
let currentBoomingTier = 0;

function initBooming() {
  boomingCanvas = document.getElementById('booming-canvas');
  if (!boomingCanvas) return;
  boomingCtx = boomingCanvas.getContext('2d');
  
  resizeBoomingCanvas();
  window.addEventListener('resize', resizeBoomingCanvas);

  loadTopicToBooming('ferment');
  if (!boomingAnimFrame) animateBooming();
}

function resizeBoomingCanvas() {
  if (!boomingCanvas) return;
  boomingCanvas.width = boomingCanvas.parentElement.clientWidth;
  boomingCanvas.height = boomingCanvas.parentElement.clientHeight;
  if (boomingNodes.length > 0) {
    boomingNodes[0].x = boomingCanvas.width / 2;
    boomingNodes[0].y = boomingCanvas.height / 2;
  }
}

function loadTopicToBooming(key) {
  currentBoomingTopic = key;
  const topicData = boomingTopics[key];
  if (!topicData) return;

  document.getElementById('booming-active-topic').textContent = topicData.title;
  resetBoom();
}

function resetBoom() {
  if (!boomingCanvas) return;
  const cx = boomingCanvas.width / 2;
  const cy = boomingCanvas.height / 2;
  const topicData = boomingTopics[currentBoomingTopic];

  boomingNodes = [
    {
      id: 0,
      x: cx,
      y: cy,
      label: topicData.title,
      color: "#D7FF3A",
      radius: 26,
      tier: 0,
      alpha: 1,
      desc: "โหนดหัวข้อเริ่มต้น (Single Seed Node)"
    }
  ];
  boomingEdges = [];
  currentBoomingTier = 0;
  updateBoomingStats();
}

function triggerBoom(targetTier) {
  if (!boomingCanvas) return;
  const topicData = boomingTopics[currentBoomingTopic];
  const cx = boomingCanvas.width / 2;
  const cy = boomingCanvas.height / 2;

  let items = [];
  if (targetTier === 1) items = topicData.tier1;
  else if (targetTier === 2) items = topicData.tier2;
  else if (targetTier === 3) items = topicData.tier3;

  if (!items || items.length === 0) return;

  const parentNodes = boomingNodes.filter(n => n.tier === targetTier - 1);
  const angleStep = (Math.PI * 2) / items.length;
  const radiusDistance = 120 + targetTier * 65;

  items.forEach((item, index) => {
    setTimeout(() => {
      const angle = index * angleStep + (Math.random() * 0.15 - 0.075);
      const parent = parentNodes[index % parentNodes.length] || boomingNodes[0];
      const targetX = cx + Math.cos(angle) * radiusDistance;
      const targetY = cy + Math.sin(angle) * radiusDistance;

      const newNode = {
        id: boomingNodes.length,
        x: targetX,
        y: targetY,
        label: item.label,
        color: item.color,
        radius: targetTier === 3 ? 18 : 13,
        tier: targetTier,
        alpha: 0,
        desc: item.desc
      };

      boomingNodes.push(newNode);
      boomingEdges.push({ from: parent.id, to: newNode.id, color: item.color });
      updateBoomingStats();
    }, index * 40); // 40ms stagger per project brief
  });

  currentBoomingTier = Math.max(currentBoomingTier, targetTier);
  document.getElementById('booming-tier-lbl').textContent = `TIER ${currentBoomingTier}`;
}

function updateBoomingStats() {
  const countEl = document.getElementById('booming-count');
  if (countEl) countEl.textContent = boomingNodes.length;
}

function animateBooming() {
  if (!boomingCtx || !boomingCanvas) return;
  boomingCtx.clearRect(0, 0, boomingCanvas.width, boomingCanvas.height);

  // Background grid marks
  boomingCtx.strokeStyle = "rgba(44, 44, 58, 0.4)";
  boomingCtx.lineWidth = 1;

  // Draw Edges
  boomingEdges.forEach(e => {
    const s = boomingNodes.find(n => n.id === e.from);
    const t = boomingNodes.find(n => n.id === e.to);
    if (s && t) {
      boomingCtx.beginPath();
      boomingCtx.moveTo(s.x, s.y);
      boomingCtx.lineTo(t.x, t.y);
      boomingCtx.strokeStyle = e.color;
      boomingCtx.globalAlpha = Math.min(t.alpha * 0.7, 0.75);
      boomingCtx.lineWidth = 1.5;
      boomingCtx.stroke();
      boomingCtx.globalAlpha = 1;
    }
  });

  // Draw Nodes
  boomingNodes.forEach(n => {
    if (n.alpha < 1) n.alpha += 0.08;

    // Glowing aura
    boomingCtx.beginPath();
    boomingCtx.arc(n.x, n.y, n.radius + 8, 0, Math.PI * 2);
    boomingCtx.fillStyle = n.color;
    boomingCtx.globalAlpha = n.alpha * 0.2;
    boomingCtx.fill();
    boomingCtx.globalAlpha = 1;

    // Center Node
    boomingCtx.beginPath();
    boomingCtx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
    boomingCtx.fillStyle = n.tier === 0 ? "#D7FF3A" : "#17171F";
    boomingCtx.fill();
    boomingCtx.lineWidth = 2;
    boomingCtx.strokeStyle = n.color;
    boomingCtx.stroke();

    // Text Label
    boomingCtx.textAlign = "center";
    boomingCtx.textBaseline = "middle";

    if (n.tier === 0) {
      boomingCtx.font = "bold 13px 'Chakra Petch'";
      boomingCtx.fillStyle = "#000";
      boomingCtx.fillText("SEED", n.x, n.y);

      boomingCtx.fillStyle = "#D7FF3A";
      boomingCtx.font = "bold 13px 'IBM Plex Sans Thai'";
      boomingCtx.fillText(n.label, n.x, n.y + n.radius + 16);
    } else {
      boomingCtx.font = "11px 'IBM Plex Sans Thai'";
      boomingCtx.fillStyle = "#F2EDE3";
      boomingCtx.fillText(n.label, n.x, n.y + n.radius + 14);
    }
  });

  boomingAnimFrame = requestAnimationFrame(animateBooming);
}


// ==========================================================================
// 2. 6-DIMENSION KNOWLEDGE GRAPH (HALL 03)
// ==========================================================================

const categoryMeta = {
  SCI: { name: "วิทยาศาสตร์", color: "#2EE6FF", shape: "circle" },
  HIST: { name: "ประวัติศาสตร์", color: "#FF5A1F", shape: "hexagon" },
  TECH: { name: "เทคโนโลยี", color: "#8C6BFF", shape: "square" },
  CULT: { name: "วัฒนธรรม & ภูมิปัญญา", color: "#FFC233", shape: "triangle" },
  BIO: { name: "ธรรมชาติ & ชีวิต", color: "#34E89E", shape: "diamond" },
  ART: { name: "ศิลปะ & ดีไซน์", color: "#FF5FA2", shape: "ring" }
};

const rawGraphNodes = [
  // SCI
  { id: "SCI-1", title_th: "จุลินทรีย์แลคโตบาซิลลัส", title_en: "Lactobacillus Microbes", cat: "SCI", era: "รัตนโกสินทร์ / พ.ศ. 2500", year: 1957, summary: "แบคทีเรียผลิตกรดแลคติกที่มีบทบาทสำคัญในการยับยั้งแบคทีเรียก่อโรคและรักษาสมดุลกรดด่าง", takeaway: "ช่วยเสริมสร้างภูมิต้านทานในระบบทางเดินอาหารและลดการติดเชื้อ", source: "กรมวิทยาศาสตร์บริการ" },
  { id: "SCI-2", title_th: "การสังเคราะห์ด้วยแสงคลอโรฟิลล์", title_en: "Chlorophyll Photosynthesis", cat: "SCI", era: "ร่วมสมัย / พ.ศ. 2520", year: 1977, summary: "ปฏิกิริยาเคมีที่เปลี่ยนพลังงานโฟตอนของแสงให้เป็นพลังงานเคมีในรูปน้ำตาลกลูโคส", takeaway: "ปลูกต้นไม้ในที่ร่มใกล้แสงธรรมชาติเพื่ออัตราฟอกอากาศสูงสุด", source: "สวทช." },
  { id: "SCI-3", title_th: "สารต้านอนุมูลอิสระในขมิ้นชัน", title_en: "Curcumin Bioactives", cat: "SCI", era: "ร่วมสมัย / พ.ศ. 2540", year: 1997, summary: "สารเคอร์คูมินอยด์ที่มีฤทธิ์ต้านการอักเสบและป้องกันความเสื่อมของเซลล์สมอง", takeaway: "ชงขมิ้นชันกับนมอุ่นเพื่อช่วยการดูดซึมเคอร์คูมินได้ดีขึ้น", source: "องค์การเภสัชกรรม" },
  { id: "SCI-4", title_th: "อุณหพลศาสตร์ของเตาเผาดินเผา", title_en: "Kiln Thermodynamics", cat: "SCI", era: "สุโขทัย / พ.ศ. 1850", year: 1307, summary: "การควบคุมการไหลเวียนของความร้อนแบบเตาทุเรียนสุโขทัยเพื่อให้เคลือบเขียวไข่กาติดแน่น", takeaway: "การเลือกใช้ภาชนะดินเผาแท้ช่วยเก็บความร้อนของอาหารได้นานและปลอดภัย", source: "พิพิธภัณฑสถานแห่งชาติ" },

  // HIST
  { id: "HIST-1", title_th: "เส้นทางเครื่องเทศอ่าวสยาม", title_en: "Gulf of Siam Spice Route", cat: "HIST", era: "อยุธยา / พ.ศ. 2150", year: 1607, summary: "เครือข่ายการค้าทางเรือระหว่างสยาม จีน อินเดีย และเปอร์เซีย ที่หลอมรวมวัฒนธรรมการปรุงรส", takeaway: "การผสมผสานวัตถุดิบหลากวัฒนธรรมสร้างความได้เปรียบทางเศรษฐกิจสร้างสรรค์", source: "หอจดหมายเหตุแห่งชาติ" },
  { id: "HIST-2", title_th: "จารึกวัดโพธิ์ตำราการแพทย์", title_en: "Wat Pho Inscriptions", cat: "HIST", era: "รัชกาลที่ 3 / พ.ศ. 2375", year: 1832, summary: "การรวบรวมองค์ความรู้ภูมิปัญญาการแพทย์ แผนผังเส้นประธาน และกายภาพบำบัด", takeaway: "กายบริหารฤๅษีดัดตน 5 นาทีตอนเช้าช่วยคลาย Office Syndrome", source: "ยูเนสโก มรดกความทรงจำโลก" },
  { id: "HIST-3", title_th: "ระบบคูคลองและการชลประทานอยุธยา", title_en: "Ayutthaya Canal Network", cat: "HIST", era: "อยุธยา / พ.ศ. 1900", year: 1357, summary: "การวางผังเมืองเกาะเมืองอยุธยาเพื่อป้องกันน้ำท่วมและการสัญจรทางเรือ", takeaway: "การออกแบบเมืองแบบพึ่งพาน้ำช่วยลดความร้อนของสภาพแวดล้อมโดยรอบ", source: "กรมศิลปากร" },

  // TECH
  { id: "TECH-1", title_th: "Knowledge Graph ปัญญาประดิษฐ์", title_en: "Semantic Knowledge Graph", cat: "TECH", era: "ดิจิทัล / พ.ศ. 2569", year: 2026, summary: "โครงสร้างข้อมูลเชิงความหมายที่เชื่อมโยงเอนทิตีและความสัมพันธ์เข้าด้วยกัน", takeaway: "ค้นหาข้อมูลด้วยการเชื่อมโยงความสัมพันธ์จะให้ความรู้ที่ลึกซึ้งกว่าคีย์เวิร์ดเดี่ยว", source: "กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม" },
  { id: "TECH-2", title_th: "วิศวกรรมการหมักแม่นยำ (Precision Biotech)", title_en: "Precision Fermentation", cat: "TECH", era: "ดิจิทัล / พ.ศ. 2567", year: 2024, summary: "การเพาะเลี้ยงจุลินทรีย์สังเคราะห์เพื่อสร้างโปรตีนและเอนไซม์ชนิดพิเศษทดแทน", takeaway: "อนาคตของความมั่นคงทางอาหารจะพึ่งพาเทคโนโลยีไบโอเทคมากขึ้น", source: "สวทช. & สวทช." },
  { id: "TECH-3", title_th: "เซ็นเซอร์ตรวจสอบคุณภาพอากาศ (IoT AQI)", title_en: "Microclimate IoT", cat: "TECH", era: "ดิจิทัล / พ.ศ. 2568", year: 2025, summary: "เซ็นเซอร์เครือข่ายตรวจวัดค่าฝุ่น PM2.5 ความชื้น และก๊าซพิษในอาคาร", takeaway: "เปิดเครื่องฟอกอากาศล่วงหน้า 30 นาทีก่อนเข้านอนเพื่อคุณภาพการหลับลึก", source: "กสทช. / มหาวิทยาลัยเทคโนโลยี" },

  // CULT
  { id: "CULT-1", title_th: "ภูมิปัญญาแกงส้มและน้ำพริก 4 ภาค", title_en: "Four-Region Curry Pastes", cat: "CULT", era: "รัตนโกสินทร์ / พ.ศ. 2400", year: 1857, summary: "การถนอมอาหารและผสมสมุนไพรพื้นถิ่นเพื่อปรับสมดุลธาตุตามสภาพอากาศและภูมิศาสตร์", takeaway: "ทานสมุนไพรรสเผ็ดร้อนในฤดูฝนเพื่อขับลมและเสริมการไหลเวียนเลือด", source: "กรมส่งเสริมวัฒนธรรม" },
  { id: "CULT-2", title_th: "สมุดข่อยและระบบจัดเก็บความรู้", title_en: "Khoi Manuscript Indexing", cat: "CULT", era: "ธนบุรี / พ.ศ. 2315", year: 1772, summary: "การทำสารบัญ ดัชนี และสัญลักษณ์กำกับบนกระดาษข่อยเพื่อการสืบค้น", takeaway: "จัดระเบียบโน้ตการทำงานด้วยหมวดหมู่และแท็กช่วยลดความเครียดในการทำงาน", source: "สำนักหอสมุดแห่งชาติ" },
  { id: "CULT-3", title_th: "การย้อมครามธรรมชาติสกลนคร", title_en: "Indigo Dye Natural Fermentation", cat: "CULT", era: "อีสานโบราณ / พ.ศ. 2450", year: 1907, summary: "การก่อหม้อครามด้วยน้ำขี้เถ้าและจุลินทรีย์ธรรมชาติเพื่อให้สียึดเกาะเส้นใย", takeaway: "เสื้อผ้าเส้นใยธรรมชาติระบายอากาศได้ดีกว่าและเป็นมิตรต่อผิวแพ้ง่าย", source: "กระทรวงพาณิชย์ (GI สกลนคร)" },

  // BIO
  { id: "BIO-1", title_th: "พืชสมุนไพรฟ้าทะลายโจร", title_en: "Andrographis Paniculata", cat: "BIO", era: "รัตนโกสินทร์ / พ.ศ. 2480", year: 1937, summary: "พืชสมุนไพรที่มีสารแอนโดรกราโฟไลด์ ช่วยลดไข้และบรรเทาการอักเสบในทางเดินหายใจ", takeaway: "รับประทานทันทีเมื่อเริ่มมีอาการเจ็บคอเพื่อดักจับเชื้อไวรัสระยะแรก", source: "กรมการแพทย์แผนไทย" },
  { id: "BIO-2", title_th: "ความหลากหลายทางชีวภาพป่าพรุควนเคร็ง", title_en: "Peat Swamp Forest Ecosystem", cat: "BIO", era: "ธรรมชาติ / ปัจจุบัน", year: 2026, summary: "แหล่งกักเก็บคาร์บอนและบ้านของจุลินทรีย์สายพันธุ์เฉพาะทางของคาบสมุทรไทย", takeaway: "การรักษาพื้นที่ชุ่มน้ำช่วยลดความรุนแรงของภัยแล้งและน้ำท่วมฉับพลัน", source: "กรมอุทยานแห่งชาติ" },
  { id: "BIO-3", title_th: "ข้าวพันธุ์พื้นเมืองสังข์หยดพัทลุง", title_en: "Sangyod Brown Rice", cat: "BIO", era: "ใต้โบราณ / พ.ศ. 2420", year: 1877, summary: "ข้าวกล้องสีแดงที่มีสารต้านอนุมูลอิสระ โอเมก้า 3 และใยอาหารสูงเป็นพิเศษ", takeaway: "เปลี่ยนข้าวขาวเป็นข้าวกล้องสังข์หยดช่วยควบคุมระดับน้ำตาลในเลือดหลังอาหาร", source: "กรมการข้าว" },

  // ART
  { id: "ART-1", title_th: "สถาปัตยกรรมเรือนเครื่องผูกและชายคา", title_en: "Traditional Eaves Aerodynamics", cat: "ART", era: "อยุธยา / พ.ศ. 2200", year: 1657, summary: "องศาความชันของหลังคาเรือนไทยและชายคาที่ยื่นยาวเพื่อป้องกันแดดและลมมรสุม", takeaway: "การติดตั้งกันสาดทิศตะวันตกช่วยลดความร้อนเข้าสู่ตัวอาคารได้ถึง 40%", source: "สมาคมสถาปนิกสยาม" },
  { id: "ART-2", title_th: "ลวดลายกนกและอัตราส่วนทองคำ", title_en: "Kranok Divine Proportions", cat: "ART", era: "รัตนโกสินทร์ / พ.ศ. 2350", year: 1807, summary: "โครงสร้างทางเรขาคณิตและการวนของเส้นกนกเปลวเพลิงที่สอดคล้องกับสัดส่วนฟีโบนักชี", takeaway: "การนำเส้นสายธรรมชาติมาใช้ในการออกแบบ UI ช่วยให้ผู้ใช้รู้สึกสบายตาและจำได้ง่าย", source: "มหาวิทยาลัยศิลปากร" },
  { id: "ART-3", title_th: "เครื่องเบญจรงค์และเทคนิคการเคลือบสี", title_en: "Benjarong Ceramic Enamel", cat: "ART", era: "รัตนโกสินทร์ / พ.ศ. 2325", year: 1782, summary: "การลงสี 5 สีหลักบนเคลือบขาวด้วยอุณหภูมิความร้อนแม่นยำสูง", takeaway: "การจำกัดชุดสีหลักไม่เกิน 5 สีในชิ้นงานช่วยเพิ่มความหรูหราและชัดเจนของเนื้อหา", source: "ศูนย์ศิลปาชีพ" }
];

let mainCanvas, mainCtx;
let graphNodes = [];
let graphEdges = [];
let activeCategoryFilter = "ALL";
let hoveredNode = null;
let selectedNode = null;

function initMainGraph() {
  mainCanvas = document.getElementById('main-graph-canvas');
  if (!mainCanvas) return;
  mainCtx = mainCanvas.getContext('2d');

  resizeMainGraph();
  window.addEventListener('resize', resizeMainGraph);

  // Setup nodes with positions
  setupGraphSimulation();

  // Mouse interaction
  mainCanvas.addEventListener('mousemove', onGraphMouseMove);
  mainCanvas.addEventListener('click', onGraphMouseClick);

  animateMainGraph();
}

function resizeMainGraph() {
  if (!mainCanvas) return;
  mainCanvas.width = mainCanvas.parentElement.clientWidth;
  mainCanvas.height = mainCanvas.parentElement.clientHeight;
}

function setupGraphSimulation() {
  const w = mainCanvas.width;
  const h = mainCanvas.height;

  graphNodes = rawGraphNodes.map((n, i) => {
    const angle = (i / rawGraphNodes.length) * Math.PI * 2;
    const r = Math.min(w, h) * 0.35 * (0.5 + Math.random() * 0.5);
    return {
      ...n,
      x: w / 2 + Math.cos(angle) * r,
      y: h / 2 + Math.sin(angle) * r,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 12 + Math.random() * 8,
      visible: true
    };
  });

  // Create semantic edges
  graphEdges = [];
  for (let i = 0; i < graphNodes.length; i++) {
    for (let j = i + 1; j < graphNodes.length; j++) {
      // Connect if same category or randomly connected across categories
      if (graphNodes[i].cat === graphNodes[j].cat || (i * 3 + j) % 7 === 0) {
        graphEdges.push({
          source: graphNodes[i],
          target: graphNodes[j],
          relation: (i + j) % 3 === 0 ? "influenced" : (i + j) % 3 === 1 ? "derived_from" : "used_in"
        });
      }
    }
  }
}

function filterCategory(cat) {
  activeCategoryFilter = cat;

  // Update button active state
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.textContent.includes(cat) || (cat === 'ALL' && btn.textContent.includes('ทั้งหมด'))) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Filter nodes
  graphNodes.forEach(n => {
    n.visible = (cat === "ALL" || n.cat === cat);
  });
}

function searchGraph(query) {
  const q = query.toLowerCase().trim();
  graphNodes.forEach(n => {
    if (!q) {
      n.visible = (activeCategoryFilter === "ALL" || n.cat === activeCategoryFilter);
    } else {
      const match = n.title_th.toLowerCase().includes(q) ||
                    n.title_en.toLowerCase().includes(q) ||
                    n.summary.toLowerCase().includes(q);
      n.visible = match && (activeCategoryFilter === "ALL" || n.cat === activeCategoryFilter);
    }
  });
}

function onGraphMouseMove(e) {
  const rect = mainCanvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  hoveredNode = null;
  for (const n of graphNodes) {
    if (!n.visible) continue;
    const dist = Math.hypot(n.x - mx, n.y - my);
    if (dist <= n.radius + 6) {
      hoveredNode = n;
      mainCanvas.style.cursor = 'pointer';
      return;
    }
  }
  mainCanvas.style.cursor = 'default';
}

function onGraphMouseClick(e) {
  if (hoveredNode) {
    selectedNode = hoveredNode;
    showNodeDetail(selectedNode);
  }
}

function showNodeDetail(node) {
  const panel = document.getElementById('node-detail-panel');
  if (!panel) return;

  document.getElementById('detail-specimen-id').textContent = `GRM-2026-${node.cat}-${node.id}`;
  document.getElementById('detail-title').textContent = `${node.title_th} (${node.title_en})`;
  document.getElementById('detail-era').textContent = `ERA: ${node.era} | พิกัดโหนด: ${node.cat}`;
  document.getElementById('detail-summary').textContent = node.summary;
  document.getElementById('detail-takeaway').textContent = node.takeaway;
  document.getElementById('detail-source').textContent = node.source;

  panel.classList.add('visible');
}

function closeNodeDetail() {
  const panel = document.getElementById('node-detail-panel');
  if (panel) panel.classList.remove('visible');
}

function drawNodeShape(ctx, node, isHovered, isSelected) {
  const cat = categoryMeta[node.cat] || { color: "#D7FF3A", shape: "circle" };
  const r = isHovered || isSelected ? node.radius + 4 : node.radius;

  ctx.save();
  ctx.translate(node.x, node.y);

  // Selection Glow
  if (isSelected || isHovered) {
    ctx.beginPath();
    ctx.arc(0, 0, r + 10, 0, Math.PI * 2);
    ctx.fillStyle = cat.color;
    ctx.globalAlpha = 0.35;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Draw Specific Geometry per WCAG AA rules
  ctx.beginPath();
  if (cat.shape === 'circle') {
    ctx.arc(0, 0, r, 0, Math.PI * 2);
  } else if (cat.shape === 'hexagon') {
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3;
      const hx = Math.cos(a) * r;
      const hy = Math.sin(a) * r;
      if (i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
  } else if (cat.shape === 'square') {
    ctx.rect(-r, -r, r * 2, r * 2);
  } else if (cat.shape === 'triangle') {
    ctx.moveTo(0, -r * 1.2);
    ctx.lineTo(r, r * 0.8);
    ctx.lineTo(-r, r * 0.8);
    ctx.closePath();
  } else if (cat.shape === 'diamond') {
    ctx.moveTo(0, -r * 1.2);
    ctx.lineTo(r * 1.1, 0);
    ctx.lineTo(0, r * 1.2);
    ctx.lineTo(-r * 1.1, 0);
    ctx.closePath();
  } else if (cat.shape === 'ring') {
    ctx.arc(0, 0, r, 0, Math.PI * 2);
  }

  ctx.fillStyle = isSelected ? "#D7FF3A" : "#17171F";
  ctx.fill();
  ctx.lineWidth = isSelected ? 3 : 2;
  ctx.strokeStyle = isSelected ? "#D7FF3A" : cat.color;
  ctx.stroke();

  // Draw Inner Ring if ring type
  if (cat.shape === 'ring') {
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
    ctx.strokeStyle = cat.color;
    ctx.stroke();
  }

  ctx.restore();

  // Label text
  ctx.font = isHovered ? "bold 12px 'IBM Plex Sans Thai'" : "11px 'IBM Plex Sans Thai'";
  ctx.fillStyle = isSelected ? "#D7FF3A" : "#F2EDE3";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.title_th, node.x, node.y + r + 12);
}

function animateMainGraph() {
  if (!mainCtx || !mainCanvas) return;
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);

  // Gentle force drift
  graphNodes.forEach(n => {
    n.x += n.vx;
    n.y += n.vy;

    // Bounce off margins
    if (n.x < 40 || n.x > mainCanvas.width - 40) n.vx *= -1;
    if (n.y < 40 || n.y > mainCanvas.height - 40) n.vy *= -1;
  });

  // Draw Edges
  graphEdges.forEach(e => {
    if (!e.source.visible || !e.target.visible) return;

    mainCtx.beginPath();
    mainCtx.moveTo(e.source.x, e.source.y);
    mainCtx.lineTo(e.target.x, e.target.y);

    const isHighlight = (hoveredNode && (e.source === hoveredNode || e.target === hoveredNode)) ||
                        (selectedNode && (e.source === selectedNode || e.target === selectedNode));

    if (e.relation === "influenced") {
      mainCtx.setLineDash([]);
      mainCtx.strokeStyle = isHighlight ? "#D7FF3A" : "rgba(255, 90, 31, 0.35)";
    } else if (e.relation === "derived_from") {
      mainCtx.setLineDash([5, 5]);
      mainCtx.strokeStyle = isHighlight ? "#D7FF3A" : "rgba(46, 230, 255, 0.35)";
    } else {
      mainCtx.setLineDash([2, 4]);
      mainCtx.strokeStyle = isHighlight ? "#D7FF3A" : "rgba(140, 107, 255, 0.35)";
    }

    mainCtx.lineWidth = isHighlight ? 2 : 1;
    mainCtx.stroke();
    mainCtx.setLineDash([]);
  });

  // Draw Nodes
  graphNodes.forEach(n => {
    if (!n.visible) return;
    const isHover = (n === hoveredNode);
    const isSelect = (n === selectedNode);
    drawNodeShape(mainCtx, n, isHover, isSelect);
  });

  requestAnimationFrame(animateMainGraph);
}

// ==========================================================================
// 3. INITIALIZATION ON DOM READY
// ==========================================================================
window.addEventListener('DOMContentLoaded', () => {
  initBooming();
  initMainGraph();
});
