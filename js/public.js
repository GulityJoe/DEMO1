/**
 * Created by Administrator on 2017/11/8 0008.
 */
//新闻列表js
    //为class为affix的且包含子元素data-toggle为item的父元素div绑定单击事件
$(".nav-list:has([data-toggle=item])")
    .on("click",
    "[data-toggle=item]",
        e=>{
        //阻止默认行为:
        e.preventDefault();
        var $tar=$(e.target);
        //如果当前a的父元素不是.active
        if(!$tar.parent()
                .is("listcolor")){
            //就先为当前a的父元素加active，再为其余的兄弟去掉active
            $tar.parent()
                .addClass("listcolor")
                .siblings()
                .removeClass("listcolor");
            //获得当前a的href
            var id=$tar.attr("href");
            //找到对应id的div，添加active，再为其它兄弟清除active
            $(id).addClass("active1")
                .siblings()
                .removeClass("active1")
        }
    })

$(".top-nav:has([data-toggle=item])").on("click","[data-toggle=item]",e=>{
         //e.preventDefault();
            var $nav=$(e.target);
            //如果当前a的父元素不是.active
            if(!$nav.parent().children()
                .is("hover1")){
                $nav.parent().children()
                    .addClass("hover1")
                    .parent().siblings().children()
                    .removeClass("hover1");
            }
})