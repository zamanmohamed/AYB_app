const menuItems = [
    {
        label: "Navigation", type: "HEADER", //  HEADER , HASHMENU, ITEM(default)
    },
    {
        type: "HASHMENU", id: 1, label: "Dashboard", icon: "ph-duotone ph-gauge", badge: "2", dataPage: null, link: "#",
        submenu: [
            { id: "dashboard", label: "Analytics", link: "/dashboard", dataPage: "dashboard" },
            { id: "affiliate", label: "Affiliate", link: "/affiliate-dashboard", dataPage: "Affiliate" },
            { id: "finance", label: "Finance", link: "/finance-dashboard", dataPage: "finance" },
            { id: "helpdesk", label: "Helpdesk", link: "/helpdesk-dashboard", dataPage: "helpdesk" },
            { id: "invoice", label: "Invoice", link: "/invoice-dashboard", dataPage: "invoice" },
        ]
    },

    { label: "Widget", type: "HEADER" },
    { id: "statistics", label: "Statistics", icon: "ph-duotone ph-projector-screen-chart", link: "/widget/w_statistics", dataPage: "w_statistics" },
    { id: "user", label: "User", icon: "ph-duotone ph-identification-card", link: "/widget/w_user", dataPage: "w_user" },
    { id: "data", label: "Data", icon: "ph-duotone ph-database", link: "/widget/w_data", dataPage: "w_data" },
    { id: "chart", label: "Chart", icon: "ph-duotone ph-chart-pie", link: "/widget/w_chart", dataPage: "w_chart" },

    { label: "Application", type: "HEADER" },
    { id: "calendar", label: "Calendar", link: "/application/calendar", icon: "ph-duotone ph-calendar-blank", dataPage: "calendar" },
    { id: "chat", label: "Chat", link: "/application/chat", icon: "ph-duotone ph-chats-circle", dataPage: "chat" },
    {
        type: "HASHMENU", id: "gallery", label: "Gallery", link: "#", dataPage: null, icon: "ph-duotone ph-image",
        submenu: [
            { id: "grid", label: "Grid", link: "/application/gallary/grid", dataPage: "grid" },
            { id: "masonary", label: "Masonary", link: "/application/gallary/masonary", dataPage: "masonary" },
        ]
    },
    {
        type: "HASHMENU", id: "ecom", label: "E-commerce", link: "#", dataPage: null, icon: "ph-duotone ph-shopping-cart",
        submenu: [
            { id: "product", label: "Product", link: "/application/ecom_product", dataPage: "ecom_product" },
            { id: "productdetails", label: "Product details", link: "/application/ecom_product-details", dataPage: "ecom_product-details" },
            { id: "productlist", label: "Product List", link: "/application/ecom_product-list", dataPage: "ecom_product-list" },
            { id: "addnewproduct", label: "Add New Product", link: "/application/ecom_product-add", dataPage: "ecom_product-add" },
            { id: "checkout", label: "Checkout", link: "/application/ecom_checkout", dataPage: "ecom_checkout" }
        ]
    },
    {
        type: "HASHMENU", id: "helpdesk", label: "Helpdesk", link: "#", dataPage: null, icon: "ph-duotone ph-lifebuoy",
        submenu: [
            {
                type: "HASHMENU", id: "ticket", label: "Ticket", link: "#", dataPage: null,
                submenu: [
                    { id: "helpdeskcreate", label: "Create", link: "/application/helpdesk/create", dataPage: "create" },
                    { id: "helpdesklist", label: "List", link: "/application/helpdesk/ticketlist", dataPage: "list" },
                    { id: "helpdeskdetails", label: "Details", link: "/application/helpdesk/details", dataPage: "details" },
                ]
            },
            { id: "customer", label: "Customer", link: "/application/helpdesk/customer", dataPage: "customer" },
        ]
    },
    {
        type: "HASHMENU", id: "invoice1", label: "Invoice1", dataPage: null, icon: "ph-duotone ph-newspaper", link: "#",
        submenu: [
            { id: "invoicelist", label: "Invoice List", link: "/application/invoice-list", dataPage: "invoice-list" },
            { id: "create", label: "Create", link: "/application/invoice-create", dataPage: "invoice-create" },
            { id: "preview", label: "Preview", link: "/application/invoice-view", dataPage: "invoice-view" }
        ]
    },
    {
        type: "HASHMENU", id: "invoice2", label: "Invoice2", dataPage: null, icon: "ph-duotone ph-newspaper", link: "#",
        submenu: [
            { id: "invoice2create", label: "Create", link: "/application/invoice/create", dataPage: "invoice-create2" },
            { id: "invoice2details", label: "Details", link: "/application/invoice/details", dataPage: "invoice-details" },
            { id: "invoice2list", label: "List", link: "/application/invoice/list", dataPage: "invoice-list" },
            { id: "edit", label: "Edit", link: "/application/invoice/edit", dataPage: "invoice-edit" }
        ]
    },
    { id: "mail", label: "Mail", link: "/application/mail", icon: "ph-duotone ph-envelope-open", dataPage: "mail" },
    {
        type: "HASHMENU", id: "membership", label: "Membership", link: "#", dataPage: null, icon: "ph-duotone ph-identification-badge",
        submenu: [
            { id: "membershipdashboard", label: "Dashboard", link: "/application/membership/membership-dashboard", dataPage: "dashboard" },
            { id: "dashboardlist", label: "List", link: "/application/membership/list", dataPage: 'list' },
            { id: "membershippricing", label: "Pricing", link: "/application/membership/pricing", dataPage: 'pricing' },
            { id: "setting", label: "Setting", link: "/application/membership/setting", dataPage: "setting" },
        ]
    },
    {
        type: "HASHMENU", id: "course", label: "Online Courses", link: "#", dataPage: null, icon: "ph-duotone ph-books",
        submenu: [
            { id: "coursesdashboard", label: "Dashboard", link: "/application/courses/course-dashboard", dataPage: "online" },
            {
                type: "HASHMENU", id: "teacher", label: "Teacher", link: "#", dataPage: null,
                submenu: [
                    { id: "teacherlist", label: "List", link: "/application/courses/teachers/teachers-list", dataPage: "teacher-list" },
                    { id: "teacherapply", label: "Apply", link: "/application/courses/teachers/teacher-apply", dataPage: "teacher-apply" },
                    { id: "teacheradd", label: "Add", link: "/application/courses/teachers/teacher-add", dataPage: "add" },
                ]
            },
            {
                type: "HASHMENU", id: "student", label: "Student", link: "#", dataPage: null,
                submenu: [
                    { id: "studentlist", label: "list", link: "/application/courses/students/student-list", dataPage: "student-list" },
                    { id: "studentapply", label: "Apply", link: "/application/courses/students/student-apply", dataPage: "student-apply" },
                    { id: "studentadd", label: "Add", link: "/application/courses/students/student-add", dataPage: "add" },
                ]
            },
            {
                type: "HASHMENU", id: "courses", label: "Courses", link: "#", dataPage: null,
                submenu: [
                    { id: "courseview", label: "View", link: "/application/courses/courses/course-view", dataPage: "view" },
                    { id: "courseadd", label: "Add", link: "/application/courses/courses/course-add", dataPage: "add" },
                ]
            },
            { id: "coursepricing", label: "Pricing", link: "/application/courses/course-pricing", dataPage: "pricing" },
            { id: "coursessite", label: "Site", link: "/application/courses/course-site", dataPage: "site" },
            {
                type: "HASHMENU", id: "settings", label: "Settings", link: "#", dataPage: "setting",
                submenu: [
                    { id: "payment", label: "Payment", link: "/application/courses/settings/payments", dataPage: "payment" },
                    { id: "settingpricing", label: "Pricing", link: "/application/courses/settings/pricing", dataPage: "pricing" },
                    { id: "notifications", label: "Notifications", link: "/application/courses/settings/notification", dataPage: "notifications" },
                ]
            },
        ]
    },
    { id: "Plans", label: "Plans", icon: "ph-duotone ph-currency-circle-dollar", link: "/application/plans/plans", dataPage: "plans" },
    {
        type: "HASHMENU", id: "users", label: "Users", dataPage: null, icon: "ph-duotone ph-user-circle", link: "#",
        submenu: [
            { id: "accountprofile", label: "Account Profile", link: "/application/account-profile", dataPage: "account-profile" },
            { id: "socialmedia", label: "Social media", link: "/application/social-media", dataPage: "social-media" },
            { id: "usercard", label: "User Card", link: "/application/user-card", dataPage: "user-card" },
            { id: "userlist", label: "User List", link: "/application/user-list", dataPage: "user-list" },
            { id: "userteam", label: "Team", link: "/application/team", dataPage: "team" }
        ]
    },

    { label: "Pages", type: "HEADER", },
    {
        type: "HASHMENU", id: "authentication", label: "Authentication", dataPage: null, icon: "ph-duotone ph-shield-checkered", link: "#",
        submenu: [
            {
                type: "HASHMENU", id: "auth1", label: "Authentication 1", dataPage: null, link: "#",
                submenu: [
                    { id: "login", label: "Login", link: "/pages/login-v1", dataPage: "pages-login-v1" },
                    { id: "register", label: "Register", link: "/pages/register-v1", dataPage: "pages-register-v1" },
                    { id: "forgotpw", label: "Forgot Password", link: "/pages/forgot-password-v1", dataPage: "pages-forgot-password-v1" },
                    { id: "resetpw", label: "Reset Password", link: "/pages/reset-password-v1", dataPage: "pages-reset-password-v1" },
                    { id: "codeverify", label: "Code Verification", link: "/pages/code-verification-v1", dataPage: "code-verification-v1" }
                ]
            },
            {
                type: "HASHMENU", id: "auth2", label: "Authentication 2", dataPage: null, link: "#",
                submenu: [
                    { id: "login2", label: "Login", link: "/pages/login-v2", dataPage: "pages-login-v2" },
                    { id: "register2", label: "Register", link: "/pages/register-v2", dataPage: "pages-register-v2" },
                    { id: "forgotpw2", label: "Forgot Password", link: "/pages/forgot-password-v2", dataPage: "pages-forgot-password-v2" },
                    { id: "resetpw2", label: "Reset Password", link: "/pages/reset-password-v2", dataPage: "pages-reset-password-v2" },
                    { id: "codeverify2", label: "Code Verification", link: "/pages/code-verification-v2", dataPage: "code-verification-v2" }
                ]
            },
            { id: "loginmodal", label: "Login Modal", link: "/pages/login-modal", dataPage: "ui-loginmodal" },
        ]
    },
    {
        type: "HASHMENU", id: "maintenance", label: "Maintenance", dataPage: null, icon: "ph-duotone ph-wrench", link: "#",
        submenu: [
            { id: "er404", label: "Error 404", link: "/pages/error-404", dataPage: "error-404" },
            { id: "connectionlost", label: "Connection lost", link: "/pages/connection-lost", dataPage: "connection-lost" },
            { id: "underconstruction", label: "Under Construction", link: "/pages/under-construction", dataPage: "under-construction" },
            { id: "comingsoon", label: "Coming soon", link: "/pages/coming-soon", dataPage: "coming-soon" }
        ]
    },
    { id: "contactus", label: "Contact Us", icon: "ph-duotone ph-target", link: "/pages/contact-us", dataPage: "ui-contactus" },
    { id: "landing", label: "Landing", link: "/", icon: "ph-duotone ph-rocket", dataPage: "landing" },
    { id: "loading", label: "Loading", link: "/pages/loading", icon: "ph-duotone ph-fan", dataPage: "loading" },
    {
        type: "HASHMENU", id: "search", label: "Search", dataPage: null, icon: "ph-duotone ph-magnifying-glass", link: "#",
        submenu: [
            { id: "search", label: "Search", link: "/pages/search-page", dataPage: "search" },
            { id: "contact_search", label: "Contact Search", link: "/pages/contact-search", dataPage: "contact-search" },
        ]
    },
    { id: "setting", label: "Site Settings", icon: "ph-duotone ph-globe", link: "/pages/settings", dataPage: "ui-settings" },




    { label: "UI Components", type: "HEADER" },
    { id: "components", label: "Components", icon: "ph-duotone ph-compass-tool", link: "https://light-able-react-components.vercel.app/", dataPage: "components" },
    { id: "animation", label: "Animation", icon: "ph-duotone ph ph-flower", link: "/elements/animation", dataPage: "animation" },
    {
        type: "HASHMENU", id: "icons", label: "Icons", icon: "ph-duotone ph-flower-lotus", dataPage: null,
        submenu: [
            { id: "iconfeather", label: "Feather", link: "/elements/icon-feather", dataPage: "icon-feather" },
            { id: "fontawesome", label: "Font Awesome 5", link: "/elements/icon-fontawesome", dataPage: "icon-fontawesome" },
            { id: "iconmaterial", label: "Material", link: "/elements/icon-material", dataPage: "icon-material" },
            { id: "icontabler", label: "Tabler", link: "/elements/icon-tabler", dataPage: "icon-tabler" },
            { id: "icon-phosphor", label: "Phosphor", link: "/elements/icon-phosphor", dataPage: "icon-phosphor" },
            { id: "icon-custom", label: "Custom", link: "/elements/icon-custom", dataPage: "icon-custom" }
        ]
    },
    { label: "Forms", type: "HEADER" },
    {
        type: "HASHMENU", id: "form", label: "Forms Elements", icon: "ph-duotone ph-textbox", dataPage: null,
        submenu: [
            { id: "formbasic", label: "Form Basic", link: "/forms/form_elements", dataPage: "forms-form_elements" },
            { id: "formfloat", label: "Form Floating", link: "/forms/form_floating", dataPage: "forms-form_floating" },
            { id: "formoption", label: "Form Options", link: "/forms/form2_basic", dataPage: "forms-form2_basic" },
            { id: "inputgroup", label: "Input Groups", link: "/forms/form2_input_group", dataPage: "forms-form2_input_group" },
            { id: "checkbox", label: "Checkbox", link: "/forms/form2_checkbox", dataPage: "forms-form2_checkbox" },
            { id: "radio", label: "Radio", link: "/forms/form2_radio", dataPage: "forms-form2_radio" },
            { id: "switch", label: "Switch", link: "/forms/form2_switch", dataPage: "forms-form2_switch" },
            { id: "megaoption", label: "Mega option", link: "/forms/form2_megaoption", dataPage: "forms-form2_megaoption" }
        ]
    },
    {
        type: "HASHMENU", id: "formplugin", label: "Forms Plugins", dataPage: null, icon: "ph-duotone ph-plug-charging", link: "#",
        submenu: [
            {
                type: "HASHMENU", id: "date", label: "Date", link: "#", dataPage: null,
                submenu: [
                    { id: "datepicker", label: "Datepicker", link: "/forms/form2_datepicker", dataPage: "forms-form2_datepicker" },
                    { id: "daterange", label: "Date Range Picker", link: "/forms/form2_daterangepicker", dataPage: "forms-form2_daterangepicker" },
                ]
            },
            {
                type: "HASHMENU", id: "select", label: "Select", link: "#", dataPage: null,
                submenu: [
                    { id: "choicejs", label: "Choices js", link: "/forms/form2_choices", dataPage: "forms-form2_choices" }
                ]
            },
            { id: "captcha", label: "Google reCaptcha", link: "/forms/form2_recaptcha", dataPage: "forms-form2_recaptcha" },
            { id: "inputmask", label: "Input Masks", link: "/forms/form2_inputmask", dataPage: "forms-form2_inputmask" },
            { id: "clipboard", label: "Clipboard", link: "/forms/form2_clipboard", dataPage: "forms-form2_clipboard" },
            { id: "nouislider", label: "Nouislider", link: "/forms/form2_nouislider", dataPage: "forms-form2_nouislider" },
            { id: "typehead", label: "Typeahead", link: "/forms/form2_typeahead", dataPage: "forms-form2_typeahead" }
        ]
    },
    {
        type: "HASHMENU", id: "textedit", label: "Text Editors", dataPage: null, icon: "ph-duotone ph-pen-nib", link: "#",
        submenu: [
            { id: "tinymce", label: "Tinymce", link: "/forms/form2_tinymce", dataPage: "forms-form2_tinymce" },
            { id: "quill", label: "Quill", link: "/forms/form2_quill", dataPage: "forms-form2_quill" },
            {
                type: "HASHMENU", id: "ckeditor", label: "CK editor", dataPage: null, link: "#",
                submenu: [
                    { id: "classic", label: "classic", link: "/forms/editor-classic", dataPage: "forms-editor-classic" }
                ]
            },
            { id: "markdown", label: "Markdown", link: "/forms/form2_markdown", dataPage: "forms-form2_markdown" }
        ]
    },
    {
        type: "HASHMENU", id: "formlayout", label: "Form Layouts", dataPage: null, icon: "ph-duotone ph-windows-logo", link: "#",
        submenu: [
            { id: "layouts", label: "Layouts", link: "/forms/form2_lay_default", dataPage: "forms-form2_lay_default" },
            { id: "multicolumn", label: "Multicolumn", link: "/forms/form2_lay_multicolumn", dataPage: "forms-form2_lay_multicolumn" },
            { id: "actionbar", label: "Actionbars", link: "/forms/form2_lay_actionbars", dataPage: "forms-form2_lay_actionbars" },
            { id: "stickyaction", label: "Sticky Action bars", link: "/forms/form2_lay_stickyactionbars", dataPage: "forms-form2_lay_stickyactionbars" }
        ]
    },
    {
        type: "HASHMENU", id: "fileupload", label: "File upload", dataPage: null, icon: "ph-duotone ph-cloud-arrow-up", link: "#",
        submenu: [
            { id: "dropzone", label: "Dropzone", link: "/forms/file_upload", dataPage: "forms-file_upload" },
        ]
    },
    { id: "Wizard", label: "Form Wizard", icon: "ph-duotone ph-password", link: "/forms/form2_wizard", dataPage: "forms-form_wizard" },
    { id: "validation", label: "Form Validation", icon: "ph-duotone ph-password", link: "/forms/form_validation", dataPage: "forms-form_validation" },
    {
        id: "imagecropper", label: "Image cropper", icon: "ph-duotone ph-crop", link: "/forms/image_crop", dataPage: "forms-image_crop"
    },

    // Tables
    { label: "Table", type: "HEADER" },
    {
        type: "HASHMENU", id: "bootstraptable", label: "Bootstrap Table", dataPage: null, icon: "ph-duotone ph-table", link: "#",
        submenu: [
            { id: "basictable", label: "Basic table", link: "/table/tbl_bootstrap", dataPage: "table-tbl_bootstrap" },
            { id: "sizingtable", label: "Sizing table", link: "/table/tbl_sizing", dataPage: "table-tbl_sizing" },
            { id: "bordertable", label: "Border table", link: "/table/tbl_border", dataPage: "table-tbl_border" },
            { id: "stylingtable", label: "Styling table", link: "/table/tbl_styling", dataPage: "table-tbl_styling" }
        ]
    },
    {
        type: "HASHMENU", id: "vanillatable", label: "Vanilla Table", dataPage: null, link: "#", icon: "ph-duotone ph-grid-nine",
        submenu: [
            { id: "basicinitialization", label: "Basic initialization", link: "/table/tbl_dt_simple", dataPage: "table-tbl_dt_simple" },
            { id: "dynamicimport", label: "Dynamic Import", link: "/table/dynamicimport", dataPage: "dynamic_import" },
            { id: "rendercolumn", label: "Render Column Cells", link: "/table/tbl_dt_render_column_cells", dataPage: "table-tbl_dt_render_column_cells" },
            { id: "columnmanipulation", label: "Column Manipulation", link: "/table/tbl_dt_column-manipulation", dataPage: "table-tbl_dt_column-manipulation" },
            { id: "datetime", label: "Datetime Sorting", link: "/table/tbl_dt_datetime-sorting", dataPage: "table-tbl_dt_datetime-sorting" },
            { id: "methos", label: "Methods", link: "/table/tbl_dt_methods", dataPage: "table-tbl_dt_methods" },
            { id: "addrows", label: "Add Rows", link: "/table/addrows", dataPage: "table-tbl_dt_add-rows" },
            { id: "fetchapi", label: "Fetch API", link: "/table/tbl_dt-fetch-api", dataPage: "table-tbl_dt-fetch-api" },
            { id: "filters", label: "Filters", link: "/table/tbl_dt_filters", dataPage: "table-tbl_dt_filters" },
            { id: "export", label: "Export", link: "/table/tbl_dt_export", dataPage: "table-tbl_dt_export" }
        ]
    },
    {
        type: "HASHMENU", id: "datatable", label: "Data table", dataPage: null, link: "#", icon: "ph-duotone ph-text-columns",
        submenu: [
            { id: "advanceinitial", label: "Advance initialization", link: "/table/dt_advance", dataPage: "table-dt_advance" },
            { id: "styling", label: "Styling", link: "/table/dt_styling", dataPage: "table-dt_styling" },
            { id: "plugin", label: "Plug-in", link: "/table/plug_In", dataPage: "table-dt_plugin" },
            { id: "datasources", label: "Data sources", link: "/table/data_sources", dataPage: "table-dt_sources" }
        ]
    },
    {
        type: "HASHMENU", id: "dtextentions", label: "DT extentions", dataPage: null, link: "#", icon: "ph-duotone ph-wall",
        submenu: [
            { id: "autofill", label: "Autofill", link: "/table/dtextentions/autofill", dataPage: "table-dt_advance" },
            {
                type: "HASHMENU", id: "button", label: "Button", dataPage: null, link: "#",
                submenu: [
                    { id: "basic", label: "Basic button", link: "/table/dtextentions/buttons/basic-button", dataPage: "table-dt_basic_buttons" },
                    { id: "dataexport", label: "Data export", link: "/table/dtextentions/buttons/data-export", dataPage: "table-dt_data_exports" },
                ]
            },
            { id: "colreorder", label: "Col reorder", link: "/table/dtextentions/col_reorder", dataPage: "table-dt_col_reorder" },
            { id: "fixedcolumns", label: "Fixed columns", link: "/table/dtextentions/fixed_columns", dataPage: "table-dt_fixed_columns" },
            { id: "fixedheaders", label: "Fixed headers", link: "/table/dtextentions/fixed_header", dataPage: "table-dt_fixed_header" },
            { id: "keytable", label: "Key table", link: "/table/dtextentions/key_table", dataPage: "table-dt_key_table" },
            { id: "responsive", label: "Responsive", link: "/table/dtextentions/responsive", dataPage: "table-dt_responsive" },
            { id: "rowreorder", label: "Row reorder", link: "/table/dtextentions/row_reorder", dataPage: "table-dt_row_reorder" },
            { id: "scroller", label: "Scroller", link: "/table/dtextentions/scroller", dataPage: "table-dt_scroller" },
            { id: "selecttable", label: "Select table", link: "/table/dtextentions/select_table", dataPage: "table-dt_select_table" },
        ]
    },

    // Charts & Maps
    { label: "Charts & Maps", type: "HEADER" },
    {
        type: "HASHMENU", id: "charts", label: "Charts", dataPage: null, icon: "ph-duotone ph-chart-donut", link: "#",
        submenu: [
            { id: "apexchart", label: "Apex Chart", link: "/chart/chart-apex", dataPage: "chart-apex" },
            { id: "pietychart", label: "Piety Chart", link: "/chart/chart-piety", dataPage: "chart-piety" }
        ]
    },
    {
        type: "HASHMENU", id: "maps", label: "Maps", dataPage: null, icon: "ph-duotone ph-map-trifold", link: "#",
        submenu: [
            { id: "vectormap", label: "Vector Map", link: "/chart/map-vector", dataPage: "map-vector" },
            { id: "gmap", label: "GMaps", link: "/chart/g-maps", dataPage: "g-maps" }
        ]
    },

    //  Application






    // Pages



    // Other
    { label: "Other", type: "HEADER" },
    {
        type: "HASHMENU", id: "menulevels", label: "Menu levels", dataPage: null, icon: "ph-duotone ph-tree-structure", link: "#",
        submenu: [
            { id: "level2.1", label: "Level 2.1", dataPage: null, link: "#" },
            {
                type: "HASHMENU", id: "Level 2.2", label: "Level 2.2", dataPage: null, link: "#",
                submenu: [
                    { id: "level3.1", label: "Level 3.1", link: "#", dataPage: "#3.1" },
                    { id: "level3.2", label: "Level 3.2", link: "#", dataPage: "#3.2" },
                    {
                        type: "HASHMENU", id: "level3.3", label: "Level 3.3", dataPage: null, link: "#",
                        submenu: [
                            { id: "level4.1", label: "Level 4.1", link: "#", dataPage: "#4.1" },
                            { id: "level4.2", label: "Level 4.2", link: "#", dataPage: "#4.2" }
                        ]
                    }
                ]
            },
            {
                type: "HASHMENU", id: "level2.3", label: "Level 2.3", dataPage: null, link: "#",
                submenu: [
                    { id: "level3.1", label: "Level 3.1", link: "#", dataPage: "#3.1" },
                    { id: "level3.2", label: "Level 3.2", link: "#", dataPage: "#3.2" },
                    {
                        type: "HASHMENU", id: "level3.3", label: "Level 3.3", dataPage: null, link: "#",
                        submenu: [
                            { id: "level4.1", label: "Level 4.1", link: "#", dataPage: "#4.1" },
                            { id: "level4.2", label: "Level 4.2", link: "#", dataPage: "#4.2" }
                        ]
                    }
                ]
            }
        ]
    },
    { id: "samplepage", label: "Sample page", icon: "ph-duotone ph-desktop", link: "/other/sample-page", dataPage: "sample-page" }
];

export { menuItems };