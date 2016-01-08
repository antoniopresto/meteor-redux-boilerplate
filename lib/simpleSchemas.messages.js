/**
SimpleSchema.messages({
       required: "[label] é obrigatório",
       minString: "[label] precisa ter no mínimo [min] carácteres",
       maxString: "[label] precisa ter no máximo [max] carácteres",
       minNumber: "[label] precisa ser pelo menos [min]",
       maxNumber: "[label] não pode exceder [max]",
       minDate: "[label] - deve ser igual ou anterior a [min]",
       maxDate: "[label] - não pode ser mais que [max]",
       minCount: "[label] - Você deve especificar, pelo menos, [minCount] valores",
       maxCount: "[label] - Você não pode especificar mais de [maxCount] valores",
       noDecimal: "[label] deve ser um número",
       NotAllowed: "[label] - [value] não é um valor permitido",
       expectedString: "[label] - deve ser um texto",
       expectedNumber: "[label] - deve ser um número",
       expectedBoolean: "[label] - deve ser verdadeiro ou falso",
       expectedArray: "[label] - deve ser uma matriz",
       expectedObject: "[label] - deve ser um objeto",
       expectedConstructor:"[label] - deve ser um [type]",
       regEx: [
           {msg: "[label] Falha na validação"},
           {exp: SimpleSchema.RegEx.Email, msg: "Este não parece um e-mail válido"},
           {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] deve ser um endereço de e-mail válido"},
           {exp: SimpleSchema.RegEx.Domain, msg: "[label] deve ser um domínio válido"},
           {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] deve ser um domínio válido"},
           {exp: SimpleSchema.RegEx.IP, msg: "[label] deve ser um IPv4 ou IPv6 válido"},
           {exp: SimpleSchema.RegEx.IPv4, msg: "[label] deve ser um endereço IPv4 válido"},
           {exp: SimpleSchema.RegEx.IPv6, msg: "[label] deve ser um endereço IPv6 válido"},
           {exp: SimpleSchema.RegEx.Url, msg: "[label] deve ser uma URL válida"},
           {exp: SimpleSchema.RegEx.Id, msg: "[label] deve ser um usuário válido"}
       ],
       keyNotInSchema: "[value] não é permitido"
});*/
