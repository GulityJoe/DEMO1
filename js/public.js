/**
 * Created by Administrator on 2017/11/8 0008.
 */
//�����б�js
    //ΪclassΪaffix���Ұ�����Ԫ��data-toggleΪitem�ĸ�Ԫ��div�󶨵����¼�
$(".nav-list:has([data-toggle=item])")
    .on("click",
    "[data-toggle=item]",
        e=>{
        //��ֹĬ����Ϊ:
        e.preventDefault();
        var $tar=$(e.target);
        //�����ǰa�ĸ�Ԫ�ز���.active
        if(!$tar.parent()
                .is("listcolor")){
            //����Ϊ��ǰa�ĸ�Ԫ�ؼ�active����Ϊ������ֵ�ȥ��active
            $tar.parent()
                .addClass("listcolor")
                .siblings()
                .removeClass("listcolor");
            //��õ�ǰa��href
            var id=$tar.attr("href");
            //�ҵ���Ӧid��div�����active����Ϊ�����ֵ����active
            $(id).addClass("active1")
                .siblings()
                .removeClass("active1")
        }
    })

$(".top-nav:has([data-toggle=item])").on("click","[data-toggle=item]",e=>{
         //e.preventDefault();
            var $nav=$(e.target);
            //�����ǰa�ĸ�Ԫ�ز���.active
            if(!$nav.parent().children()
                .is("hover1")){
                $nav.parent().children()
                    .addClass("hover1")
                    .parent().siblings().children()
                    .removeClass("hover1");
            }
})