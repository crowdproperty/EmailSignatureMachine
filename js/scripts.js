var clipboard = new Clipboard(".slc");

var searchBlock = document.getElementById("hollySignature");
$searchBlock = $(searchBlock);

function generateSig() {
  var name = document.getElementById("full-name").value,
    title = document.getElementById("title").value,
    member = $('input[name="member"]:checked').val();
  // phone = document.getElementById("phone").value;

  $searchBlock.find(".employee-name").text(name);
  $searchBlock.find(".employee-title").text(title);

  if (member == "human") {
    $searchBlock.find(".employee-number").text("020 3012 0161");
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr.png"
    );
  } else {
    $searchBlock.find(".employee-number").text("020 3012 0166");
    $(".oi").attr(
      "src",
      "https://www.crowdproperty.com/assets/images/signature/bnr_brwr.png"
    );
  }

  $("button").show();
}
clipboard.on("success", function (e) {
  $("#js-copy")
    .text("Copied")
    .addClass("has-background-success-light has-text-success");
});

clipboard.on("error", function (e) {
  console.log(e);
});
