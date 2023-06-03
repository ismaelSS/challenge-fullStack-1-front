import { AuthProvider } from "./providers/AuthProvider";
import { RoutesMain } from "./routes";

export default function App() {
  return (
    <AuthProvider>
      <RoutesMain/>
    </AuthProvider>
    )
}
