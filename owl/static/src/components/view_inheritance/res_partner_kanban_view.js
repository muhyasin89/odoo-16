/** @odoo-module **/

import { registry } from "@web/core/registry"
import { kanbanView } from "@web/views/kanban/kanban_view"
import { KanbanController } from "@web/views/kanban/kanban_controller"
import { useService } from "@web/core/utils/hooks"

class ResPartnerKanbanController  extends KanbanController {
    setup(){
        super.setup()
        console.log("This is res patner kanban  controller")
        this.action = useService("action")
    }

    openSalesView(){
        console.log("Open Sales View")
        this.action.doAction({
            type: "ir.actions.act_window",
            name: "Customer Sales",
            res_model: "sale.order",
            views: [[false, "list"], [false, "form"]]
        })
    }
}

export const resPartnerKanbanView   = {
    ...kanbanView,
    Controller: ResPartnerKanbanController ,
    buttonTemplate: "owl.ResPartnerKanbanView.Buttons"
}


registry.category("views").add("res_partner_kanban_view", resPartnerKanbanView)