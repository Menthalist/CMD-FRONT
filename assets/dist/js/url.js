var toEdit = 0;
var Edition = 0;
var base_online = "http://127.0.0.1:8000";
var base_local = "http://195.15.218.172";
var route_file = base_local+"/cmd/file/"
var cas_rdv = "rdv"
const asurl_not_paginated = base_local + "/agent_app/agent/?paginated=t";
const asurl_paginated = base_local + "/agent_app/agent/";
const client_add = base_local + "/client_app/client/";
const client_add_specific = base_local + "/client_app/client/?specific=t";
const client_add_not_pg = base_local + "/client_app/client/?paginated=t";
const agent_add = base_local + "/agent_app/agent/";
const admin_add = base_local + "/admin_app/admin/";
const salarie_add = base_local + "/salarie_app/salarie/";
const salarie_add_not_pg = base_local + "/salarie_app/salarie/?paginated=t";
const salarie_pg = base_local + "/salarie_app/salarie/";
const intervention = base_local + "/config_app/intervention/?paginated=t";
const propriete = base_local + "/config_app/propriete/?paginated=t";
const user_all = base_local + "/admin_app/users/";
const tri_url = base_local + "/rdv_app/rdv/tri/";
const rdv_add = base_local + "/rdv_app/rdv/";
const rdv_add_not_paginated = base_local + "/rdv_app/rdv/?paginated=t";
const stat_url = base_local + "/manager_app/states/";
const commentaires_app = "http://195.15.218.172" + "/rdv_app/rdv/";
const files_app = "http://195.15.218.172" + "/rdv_app/rdv/documents/";
const token = $.cookie("token");
