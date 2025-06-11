/*====================================
       dropdown js
    ====================================*/
    (function ($) {
        var elActive = "";
        $.fn.selectCF = function (options) {
            // option
            var settings = $.extend(
                {

                    change: function () {}, // event change
                },
                options
            );

            return this.each(function () {
                var selectParent = $(this);
                var list = [];
                var html = "";
                var title = [];
                var s = 0;
                var title = "<span>2</span><span>People</span>";

                //parameter CSS
                var width = $(selectParent).width();

                $(selectParent).hide();
                if ($(selectParent).children("option").length == 0) {
                    return;
                }
                $(selectParent)
                    .children("option")
                    .each(function () {
                        if ($(this).is(":selected")) {
                            var s = 1;
                            var title = $(this).text();
                        } else {
                            var s = 0;
                        }
                        list.push({
                            value: $(this).attr("value"),
                            text: $(this).text(),
                            selected: s,
                        });
                    });

                // style
                var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

                html += "<ul class='selectCF'>";
                html += "<li>";
                html += "<span class='titleCF'>" + title + "</span>";
                html += "<ul>";
                $.each(list, function (k, v) {
                    s = v.selected == 1 ? "selected" : "";
                    html += "<li value=" + v.value + " class='" + s + "'><span>" + v.text + "</span><span>People</span></li>";
                });
                html += "</ul>";
                html += "</li>";
                html += "</ul>";
                $(selectParent).after(html);
                var customSelect = $(this).next("ul.selectCF"); // add Html
                var seachEl = $(this).next("ul.selectCF").children("li").children(".searchCF");
                var seachElOption = $(this).next("ul.selectCF").children("li").children("ul").children("li");
                var seachElInput = $(this).next("ul.selectCF").children("li").children(".searchCF").children("input");

                // handle active select
                $(customSelect)
                    .unbind("click")
                    .bind("click", function (e) {
                        e.stopPropagation();
                        if ($(this).hasClass("onCF")) {
                            elActive = "";
                            $(this).removeClass("onCF");
                            $(this).removeClass("searchActive");
                            $(seachElInput).val("");
                            $(seachElOption).show();
                        } else {
                            if (elActive != "") {
                                $(elActive).removeClass("onCF");
                                $(elActive).removeClass("searchActive");
                                $(seachElInput).val("");
                                $(seachElOption).show();
                            }
                            elActive = $(this);
                            $(this).addClass("onCF");
                            $(seachEl).children("input").focus();
                        }
                    });

                // handle choose option
                var optionSelect = $(customSelect).children("li").children("ul").children("li");
                $(optionSelect).bind("click", function (e) {
                    var value = $(this).attr("value");
                    if ($(this).hasClass("selected")) {
                        //
                    } else {
                        $(optionSelect).removeClass("selected");
                        $(this).addClass("selected");
                        $(customSelect).children("li").children(".titleCF").html($(this).html());
                        $(selectParent).val(value);
                        settings.change.call(selectParent); // call event change
                    }
                });

                // handle search
                $(seachEl)
                    .children("input")
                    .bind("keyup", function (e) {
                        var value = $(this).val();
                        if (value) {
                            $(customSelect).addClass("searchActive");
                            $(seachElOption).each(function () {
                                if ($(this).text().search(new RegExp(value, "i")) < 0) {
                                    // not item
                                    $(this).fadeOut();
                                } else {
                                    // have item
                                    $(this).fadeIn();
                                }
                            });
                        } else {
                            $(customSelect).removeClass("searchActive");
                            $(seachElOption).fadeIn();
                        }
                    });
            });
        };
        $(document).click(function () {
            if (elActive != "") {
                $(elActive).removeClass("onCF");
                $(elActive).removeClass("searchActive");
            }
        });
    })(jQuery);

    $(function () {
        var event_change = $("#event-change");
        $(".select").selectCF({
            change: function () {
                var value = $(this).val();
                var text = $(this).children("option:selected").html();
                event_change.html(value + " : " + text);
            },
        });
    });