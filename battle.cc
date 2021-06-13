#include <node.h>

namespace battle {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::Number;
  using v8::Value;

  void Method(const FunctionCallbackInfo<Value>&args){
    Isolate* isolate = args.GetIsolate();

    double x = 100.524161, y=151.241564;

    while (true){
      x += y;
      break;
    }

    auto total= Number::New(isolate, x);
    args.GetReturnValue().Set(total);
  }

  void Initialize(Local<Object> exports){
    NODE_SET_METHOD(exports, "battle", Method);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, Initialize);
}