import { Button, Form, Input, Label, TextField } from "@heroui/react";
import { useActionState, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthAPI } from "../../Api/AuthAPI";

function LoginPage() {
  const navigate = useNavigate();

  // 1. Mengubah prevState menjadi _prevState untuk menghindari unused variable error
  const [state, formAction, isPending] = useActionState(
    async (_prevState: any, formData: FormData) => {
      // Mengonversi FormDataEntryValue ke string secara aman
      const email = formData.get("email")?.toString() || "";
      const password = formData.get("password")?.toString() || "";

      try {
        const response = await AuthAPI.login(email, password);

        if (response.Token) {
          localStorage.setItem("token", response.Token);
        }

        return { success: true, error: null };
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.message ||
          "Kredensial salah atau server bermasalah.";
        return { success: false, error: errorMessage };
      }
    },
    { success: false, error: null },
  );

  useEffect(() => {
    if (state?.success) {
      navigate("/admin/");
    }
  }, [state, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#E6E6E6] font-main">
      <div className="flex flex-col gap-8 bg-white aspect-14/16 p-8 rounded-2xl shadow-md w-full max-w-md border-3 border-[#E6E6E6]">
        <div>
          <h2 className="text-4xl font-bold text-center">Selamat Datang.</h2>
          <p className="text-xl font-medium text-center mt-2">
            Mari masuk dan mulai perjalanan
          </p>
        </div>

        <Form action={formAction} className="flex flex-col gap-6">
          {/* Email */}
          <TextField>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              type="email"
              className="border border-[#E6E6E6] shadow-none"
              required // Mengubah dari isRequired menjadi required
            />
          </TextField>

          {/* Password */}
          <TextField>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              type="password"
              className="border border-[#E6E6E6] shadow-none"
              required // Mengubah dari isRequired menjadi required
            />
          </TextField>

          {/* Notifikasi Error */}
          {state?.error && (
            <p className="text-danger text-sm text-center font-medium bg-danger-50 p-2 rounded-lg">
              {state.error}
            </p>
          )}

          {/* Aksi Tombol */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="bg-black text-white rounded-lg px-10 font-thin text-sm disabled:opacity-50"
              isDisabled={isPending} // Menggunakan isDisabled bawaan karena isLoading tidak terdefinisi
            >
              {isPending ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              variant="outline"
              fullWidth
              className="border-black rounded-lg text-sm"
              onClick={() => navigate("/")}
              isDisabled={isPending} // Menambahkan isDisabled untuk mencegah klik saat pending
            >
              Back to Page
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;