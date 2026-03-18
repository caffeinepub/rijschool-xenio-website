export const idlFactory = ({ IDL }) => {
  const ContactForm = IDL.Record({
    'name' : IDL.Text,
    'email' : IDL.Text,
    'message' : IDL.Text,
    'timestamp' : IDL.Int,
    'phone' : IDL.Text,
  });
  const http_header = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const http_request_result = IDL.Record({
    'status' : IDL.Nat,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(http_header),
  });
  const TransformationInput = IDL.Record({
    'context' : IDL.Vec(IDL.Nat8),
    'response' : http_request_result,
  });
  const TransformationOutput = IDL.Record({
    'status' : IDL.Nat,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(http_header),
  });
  return IDL.Service({
    'getAllContactForms' : IDL.Func([], [IDL.Vec(ContactForm)], ['query']),
    'submitContactForm' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [IDL.Bool],
        [],
      ),
    'transform' : IDL.Func(
        [TransformationInput],
        [TransformationOutput],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
