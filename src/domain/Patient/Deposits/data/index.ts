const tableFields = [
  {
    name: "contr_code",
    title: "Код договора",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "contr_id",
    title: "ИД договора",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "date_from",
    title: "Начало договора",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "date_to",
    title: "Окончание договора",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "date_sign",
    title: "Подписание договора",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "payer_name",
    title: "Плательщик",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "pid",
    title: "pid",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
  {
    name: "suspended",
    title: "Приостановлен",
    is_visible: true,
    is_orderable: false,
    field_type: "boolean",
  },
  {
    name: "user_id",
    title: "User ID",
    is_visible: true,
    is_orderable: false,
    field_type: "string",
  },
];

const depositFilters = [
  {
    group: null,
    name: "user_id",
    widget: {
      hint: null,
      max_length: 120,
      title: "User ID",
      type: "number_input",
    },
  },
  {
    group: null,
    name: "pid",
    widget: {
      hint: null,
      max_length: 120,
      title: "PID",
      type: "text_input",
    },
  },
  {
    group: null,
    name: "contr_id",
    widget: {
      hint: null,
      max_length: 120,
      title: "ИД договора",
      type: "number_input",
    },
  },
  {
    group: null,
    name: "contr_code",
    widget: {
      hint: null,
      max_length: 120,
      title: "Код договора",
      type: "text_input",
    },
  },
];

export { depositFilters, tableFields };
