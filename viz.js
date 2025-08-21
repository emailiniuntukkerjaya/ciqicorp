looker.plugins.visualizations.add({
  id: "process_tracker",
  label: "Process Tracker",
  options: {
    status_field: {
      type: "string",
      label: "Status Field",
      default: "your_model.status"
    },
    steps: {
      type: "array",
      label: "Steps (in order)",
      default: [
        "Job Posting",
        "Applications Screening",
        "Assessment and Interviewing",
        "Background Check",
        "Job Offer"
      ]
    }
  },

  create: function (element, config) {
    element.innerHTML = `<div id="tracker" style="display:flex;justify-content:space-between;align-items:center;width:100%;"></div>`;
  },

  updateAsync: function (data, element, config, queryResponse, details, done) {
    const container = element.querySelector("#tracker");
    container.innerHTML = "";

    const steps = config.steps || [];
    const statusField = config.status_field;
    if (!statusField) {
      container.innerHTML = "<p style='color:red'>⚠️ Please set Status Field in options</p>";
      done();
      return;
    }

    // Ambil status dari data pertama
    let currentStatus = null;
    if (data.length > 0) {
      const row = data[0];
      currentStatus = row[statusField] ? row[statusField].value : null;
    }

    steps.forEach((step, i) => {
      const circle = document.createElement("div");
      circle.style.width = "60px";
      circle.style.height = "60px";
      circle.style.borderRadius = "50%";
      circle.style.display = "flex";
      circle.style.alignItems = "center";
      circle.style.justifyContent = "center";
      circle.style.color = "white";
      circle.style.fontSize = "12px";
      circle.style.margin = "0 10px";
      circle.style.fontWeight = "bold";

      if (step === currentStatus) {
        circle.style.background = "#ff6b6b"; // merah aktif
      } else if (steps.indexOf(currentStatus) > i) {
        circle.style.background = "#2ecc71"; // hijau sudah lewat
      } else {
        circle.style.background = "#bdc3c7"; // abu-abu belum mulai
      }

      circle.innerHTML = i + 1;

      const label = document.createElement("div");
      label.style.textAlign = "center";
      label.style.fontSize = "12px";
      label.style.marginTop = "4px";
      label.innerText = step;

      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.flexDirection = "column";
      wrapper.style.alignItems = "center";
      wrapper.appendChild(circle);
      wrapper.appendChild(label);

      container.appendChild(wrapper);

      if (i < steps.length - 1) {
        const line = document.createElement("div");
        line.style.flex = "1";
        line.style.height = "4px";
        line.style.background =
          steps.indexOf(currentStatus) > i ? "#2ecc71" : "#bdc3c7";
        container.appendChild(line);
      }
    });

    done();
  }
});
