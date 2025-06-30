
# **Laravel 12 Expert Development Guide (MacOS, Herd, React & Inertia)**



This guide provides a comprehensive overview of **Laravel 12** coding conventions and the surrounding ecosystem, tailored for a development environment on **macOS using Laravel Herd**. It covers everything from setting up the project, adhering to Laravel’s coding style, leveraging the Laravel + React (Inertia) stack, and using modern tools like **Laravel Pint**, **Pest**, **React Query**, **Tailwind CSS**, and more. The goal is to enable an AI or developer to become an **expert in Laravel 12** development with a beautiful, readable coding style.



## **Environment Setup (MacOS with Laravel Herd)**

-   **Laravel Herd on MacOS:** Use Laravel Herd, a one-click native Laravel/PHP development environment for Mac . Herd installs all needed tools (PHP, Nginx, database, Node, etc.) and provides handy CLI binaries like php, composer, and the laravel installer out-of-the-box .

-   **Creating a New Project:** With Herd, you can create a new Laravel 12 project by running laravel new <projectname> in Terminal . This sets up a fresh Laravel codebase.

-   **Automatic Local Domain:** Herd automatically serves your project at a convenient local domain (e.g., your-folder.test) without extra configuration . This means you can immediately view the Laravel welcome page in your browser after creating the project.

-   **macOS Considerations:** All instructions assume a MacOS terminal environment. Common tools like Homebrew aren’t needed with Herd, since Herd manages PHP versions and services. Use the Herd menu bar app to toggle PHP versions or check running services as needed .




## **Coding Conventions & Style Guidelines**



Writing **beautiful, readable code** is a hallmark of Laravel. Here are key style guidelines to ensure code quality and consistency:

-   **PSR-12 & Laravel Style:** Follow [PSR-12](https://www.php-fig.org/psr/psr-12/) coding standards (4-space indentation, proper brace placement, etc.) augmented with Laravel’s own conventions. Laravel includes **Pint**, an opinionated code style fixer, to automatically enforce a clean and consistent code style . By default, Pint uses the “laravel” preset which follows Laravel’s opinionated coding style (you can also opt for the PSR-12 preset if needed).

-   **Naming Conventions:** Use descriptive, **camelCase** names for variables and functions, and **PascalCase** for class names. Eloquent models are singular (e.g., User model for users table), and controller classes typically end in Controller (e.g., UserController). Follow Laravel’s convention for database table names (snake_case plural) and pivot tables (alphabetical order of singular names).

-   **Code Readability:** Prioritize readable, expressive code. Laravel’s syntax allows writing code that almost reads like English. For example, use Eloquent methods and query scopes to make database queries expressive (e.g., $users = User::active()->orderBy('name')->get(); rather than building SQL by hand). Break long lines for clarity, and use blank lines to separate logical blocks of code.

-   **Fluent Chains:** Embrace Laravel’s fluent interfaces. Chain calls in Eloquent queries or Collections on new lines for clarity, for example:


```
// Good example of fluent chain formatting
$results = Model::query()
    ->where('active', true)
    ->orderBy('created_at', 'desc')
    ->get();
```

-   This style improves readability, highlighting the “story” of the query in steps.

-   **Avoiding “Too Clever” Code:** Write code that the next developer (or AI) can easily understand. Use Laravel’s helper functions and features instead of overly complex one-liners. For instance, prefer using collection methods or Eloquent relationships over manually looping and constructing arrays.

-   **Consistency via Pint:** Run ./vendor/bin/pint before commits to auto-fix styling issues . The coding style should remain consistent across the project – this includes use of spaces, alignment of assignments, braces on their own lines, etc. Consistency makes the codebase feel professional and “Laravel-like.”




By adhering to these conventions, the code will not only pass automated style checks but also **“feel” elegant and idiomatic**, which is a key goal in Laravel projects.



## **Laravel Project Structure and Key Components**



Laravel 12 applications follow a well-organized **MVC structure** that promotes maintainability. Key directories include :

-   **app/** – Core application code (Models, Controllers, etc.).

-   **config/** – Configuration files for various services and features.

-   **database/** – Database migrations, seeders, and factories.

-   **public/** – Publicly accessible files (index.php entry point, assets).

-   **routes/** – Route definitions (web, API, console routes).

-   **resources/** – Frontend resources: Blade views, React components, CSS, JS (also includes **views** and raw assets like images).

-   **storage/** – Logs, cached templates, file uploads, etc.

-   **tests/** – PHPUnit/Pest tests for the application.




Understanding the purpose of each directory helps in placing files correctly and following Laravel’s conventions. For example, route definitions belong in the routes/ files, and Eloquent model classes belong in app/Models (or app/ root in older apps). Adhering to this structure ensures the AI or developer can navigate and generate code in the right locations.



### **Routing (Web & API)**



Laravel’s routing is very expressive and is defined in code. Web routes are typically defined in **routes/web.php** (for browser-based interfaces), while API routes (if building a JSON API) go in **routes/api.php**.

-   **Defining Routes:** Use Laravel’s route facade to define routes. For example, a simple GET route in web.php might look like :


```
use App\Http\Controllers\UserController;

Route::get('/users', [UserController::class, 'index'])->name('users.index');
```

-   This directs a GET request for /users to the index method of UserController. Always name your routes using ->name(...) for convenient URL generation and to avoid hard-coding URLs.

-   **Route Model Binding:** Leverage **route model binding** for cleaner controllers. For instance, if a route is defined as Route::get('/users/{user}', [UserController::class, 'show']);, Laravel will automatically inject a User $user instance into the show method (after looking up the user by ID). This eliminates manual query logic in controllers.

-   **Route Groups & Middleware:** Organize routes using groups and middleware. For example, group auth-protected routes:


```
Route::middleware('auth')->group(function () {
    // routes that require authentication
});
```

-   Use middleware like auth, throttle:api (for API rate limiting), etc., to adhere to Laravel’s security conventions.

-   **API Routes & Sanctum:** If building APIs in addition to Inertia, use routes/api.php and consider using **Laravel Sanctum** for API authentication of SPA requests. Sanctum allows issuing tokens for mobile or external clients and also supports SPA cookie authentication without CSRF issues.




### **Controllers and Middleware**



Controllers in Laravel 12 should remain **lean and focused** (the “thin controller, fat model” philosophy). Key points:

-   **RESTful Controllers:** Follow RESTful conventions. A typical controller method mapping: index() for listing, show() for displaying one item, create() and store() for adding, edit() and update() for editing, and destroy() for deletion. You can quickly generate a RESTful controller via Artisan (php artisan make:controller UserController --resource) which provides method stubs.

-   **Dependency Injection:** Utilize the Laravel service container by type-hinting dependencies in controller methods or constructors. For example, inject a Request or a service class into the controller method signature – Laravel will resolve it for you.

-   **Validation:** Keep validation logic clean by using **Form Request** classes or the $request->validate([...]) helper inside controller methods. Form Request classes (generated via make:request) encapsulate validation rules and authorize logic, keeping controllers tidy.

-   **Middleware:** Use middleware to handle cross-cutting concerns. Common middleware includes Authenticate (to restrict routes to logged-in users), ValidateSignature (for signed URLs), etc. Apply them globally, in route groups, or controller constructors as appropriate. For instance, an api middleware group might include JSON response formatting, while a web group handles sessions and CSRF.




By structuring logic into controllers (for request handling), models (for business logic), and middleware (for concerns like auth), the code stays organized and readable.



### **Models & Eloquent ORM**



Eloquent is Laravel’s Active Record ORM, which maps database tables to model classes. It allows for intuitive interaction with the database and should be used to its full potential for elegant code:

-   **Model Conventions:** Each Eloquent model corresponds to a database table. By convention, model class names are singular (User) and table names plural (users). Eloquent will map these automatically (you can override the table name in the model if needed). Models reside in the app/Models/ directory.

-   **Mass Assignment & Attributes:** Define either the $fillable array on models to specify which fields can be mass-assigned or use $guarded = [] to allow all. This prevents mass-assignment vulnerabilities. Use **accessors and mutators** (now called [Eloquent attribute casting](https://laravel.com/docs/12.x/eloquent-mutators)) for transforming attributes when getting/setting (e.g., hashing passwords automatically).

-   **Relationships:** Utilize Eloquent relationships (hasOne, hasMany, belongsTo, etc.) to express relations in code. For example, a Post model might have a comments() method returning a hasMany(Comment::class) relation. Accessing $post->comments then gives a collection of related comments. This fosters readable code like $post->comments()->latest()->get().

-   **Query Scopes:** Use **query scopes** for commonly used query constraints. For example, if you often need active users, define a scope in User model: public function scopeActive($query) { return $query->where('active', true); }. Then queries can simply do User::active()->get(), which is self-explanatory in intent .

-   **Database Interactions:** Favor Eloquent’s expressive query builder over raw queries. For instance, User::where('role', 'admin')->orderBy('name')->get() is preferred to a manual DB query – it’s safer (prevents SQL injection) and more readable. Eloquent under the hood will handle the SQL, and you can chain methods to refine queries.

-   **Collections:** The results of Eloquent queries are usually **Collections** (Laravel’s enhanced array library). Use Collection methods (like filter, map, each) to write clean processing logic on result sets instead of foreach loops. Example: $users->filter(fn($u) => $u->isActive())->pluck('email') – this is concise and clear.




Eloquent’s goal is to make database interactions **simple and expressive**: “save a new user without writing raw SQL” . Embrace that to keep code concise and elegant.



### **Database Migrations & Seeding**



Schema changes and sample data in Laravel are handled via migrations and seeders/factories, ensuring a clean and versioned approach to database management:

-   **Migrations:** Every database schema change (creating or modifying tables) should be done via a migration. Use php artisan make:migration create_tasks_table to generate one. Define the table structure using the Schema builder API (fluent PHP) in the migration file , for example:


```
Schema::create('tasks', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->boolean('completed')->default(false);
    $table->timestamps();
});
```

-   This approach is database-agnostic and version-controlled. Run php artisan migrate to apply migrations . An expert practice: break large changes into multiple smaller migrations and use clear naming so it’s obvious what each migration does.

-   **Seeding & Factories:** Use **model factories** and seeders to generate test data. Laravel 12 includes improved factories (class-based, using Factory classes). For example, a UserFactory can define how to fake user data. You can then use seeders (via php artisan make:seeder) to create records with these factories. This helps in development (e.g., seeding a local database with dummy data) and for tests (to quickly instantiate models).

-   **Database Transactions in Tests:** When writing tests (with Pest or PHPUnit), Laravel automatically wraps each test in a database transaction (if using the RefreshDatabase trait), rolling back changes to keep tests isolated. This is a behind-the-scenes note, but it lets the AI know that creating data in tests won’t persist across tests by default.




Migrating and seeding regularly, especially after pulling changes, ensures your local environment matches the code – an important habit for any expert developer.



### **Views and Blade Templates**



Laravel’s Blade templating engine is typically used for server-side rendered views. In a Laravel+Inertia setup, Blade may only be used for base layouts or e-mails, but it’s worth noting:

-   **Blade Syntax:** Blade provides a clean syntax for writing HTML mixed with PHP, e.g., {{ $variable }} to echo content, @if/@foreach directives for logic. It prevents XSS by escaping output by default. Blade templates are stored in resources/views and use the .blade.php extension.

-   **Layouts and Includes:** Use Blade’s inheritance for layouts (with @extends and @section) or components/partials (@include or Blade Components) to avoid repeating HTML structure. For example, a base layout might include a header and footer, and yield a content section. This keeps views DRY and consistent.

-   **Minimal Logic in Views:** Follow the convention of keeping heavy logic out of views. Perform data preparation in controllers or view composers, and let Blade mainly handle presentation. If you need to format data (dates, numbers), consider using accessors on models or global helper functions so that Blade stays as simple as possible.

-   **When Using Inertia + React:** Most UI will be handled by React components instead of Blade. However, Blade might still be used for the initial HTML shell. For example, the default Inertia React setup uses a Blade file with an @inertia directive to load the React app. Additionally, you might still use Blade for emails (Mailable views) or for error pages. So maintain Blade skills and keep those templates clean and styled (you can still use Tailwind classes in Blade templates for emails or basic pages, though emails might require inline styles or a different approach).




In summary, Blade ensures server-rendered parts of your application are easy to write and maintain. It complements React/Inertia by handling what React does not (or where a full React component is overkill).



## **Frontend Integration: React, Inertia, and TypeScript**



One of Laravel 12’s highlights is first-party support for **React** via **Inertia.js** (Inertia v2) and even out-of-the-box TypeScript and UI components . This allows building a modern single-page application (SPA) without building a separate REST API, using Laravel as the backend and React as the frontend.

-   **Inertia.js Overview:** Inertia is often described as the “glue” between your server-side and client-side frameworks . It lets you write your frontend in React (or Vue/Svelte) while using classic Laravel routing and controllers. Inertia is _not_ a traditional REST API – instead, pages are served via controllers that return an Inertia response. Inertia then manages updating the frontend. This means **no need for a separate React Router or API routes** for page content . You still define routes in Laravel and create controllers, but instead of returning Blade views, controllers return Inertia::render('ComponentName', $props).

-   **How Inertia Works:** When a user first hits a page, Laravel renders the initial HTML (including your app layout and Inertia page data). After that, navigation is intercepted by Inertia: clicking an <Link> (Inertia’s link component) will make an AJAX request to the server, which responds with JSON (containing the new page’s component name and props). Inertia then dynamically swaps the page component on the client side. This gives a smooth SPA experience while still using server-side routing and Controllers .

-   **Setting up React + Inertia:** Laravel 12 provides a React starter kit that sets this up for you (with **Inertia 2, TypeScript, and shadcn/UI components built-in** ). If setting up manually, the steps include installing the @inertiajs/react NPM package, including Inertia’s middleware on the Laravel side (already set up in AppServiceProvider if you use the preset), and bootstrapping a React app entry (resources/js/app.jsx) that creates the Inertia app. The new starter kit automates much of this.

-   **TypeScript:** The official React starter uses TypeScript, which is recommended for better code quality. You should define type interfaces for your Inertia page props to help catch errors. For instance, if a page expects a prop users: User[], define an interface for that page’s props and use it in your component. This ensures the AI or developer doesn’t call properties that don’t exist, enhancing reliability.

-   **Directory Structure for React:** By convention, Inertia page components are placed in resources/js/Pages. Each page component corresponds to a route. For example, a route that does Inertia::render('Users/Index', ...) will load the React component at resources/js/Pages/Users/Index.jsx. Organize components logically, perhaps grouping by domain (as subfolders).

-   **Sharing Data:** Use Laravel’s **Inertia middleware** to share common data (like the logged-in user, flash messages, CSRF token) with all Inertia requests, so your React components can access them as props. In Laravel, you can use Inertia::share (or the older Inertia::shareData) in a service provider to accomplish this.

-   **React Coding Style:** For React components, follow modern React best practices:

    -   Write **function components** with hooks (no legacy class components).

    -   Use state via useState or context for local UI state; for server data, prefer Inertia props or React Query as needed.

    -   Keep components focused; lift state up when necessary and break large components into smaller ones for clarity.

    -   Use **JSX** that is readable: for example, multiline JSX with proper indentation, and extracting sub-components rather than writing extremely large JSX blocks in one file.


-   **Inertia Navigation & Forms:** Use the <Link> component from @inertiajs/react for links, which prevents full page reloads. For forms, you can either do classic form posts (Inertia will intercept them) or use Inertia’s useForm hook which simplifies form submission and handles validation errors nicely. This results in very “Laravel-esque” form handling on the client side (you get server-side validation via Laravel, but a smooth front-end experience without manual AJAX).

-   **Error Handling:** With Inertia, server-side validation errors are automatically passed back to the frontend and can be accessed via Inertia’s form state or props. Make sure to utilize this rather than implementing separate client-side validation unless needed. For exceptional errors (500s), you can customize error pages or use Inertia’s error component feature.

-   **Routing Considerations:** You do **not** need React Router. All route definitions remain in routes/web.php. If you need navigation on the front-end triggered by events (without a link click), you can programmatically visit routes using Inertia’s router (e.g., Inertia.visit() or the usePage().props to get route URLs provided by Laravel’s route() helper with Ziggy, if included).

-   **SEO and SSR:** By default, Inertia apps are client-side rendered after the first load. If SEO is a concern for certain pages, consider enabling Inertia’s server-side rendering (SSR) feature or use Laravel Folio for purely static pages. Laravel 12’s maintenance release doesn’t heavily change Inertia usage, but be aware of these advanced options.




By following these practices, the integration of Laravel + React via Inertia will be smooth. You’ll get the “best of both worlds”: Laravel’s elegant backend with React’s rich frontend, without the complexity of building and maintaining a separate API layer .



### **State Management & React Query**



For managing **server state** (data fetched from the server) on the frontend, **React Query (TanStack Query)** is a powerful tool. It can be used in an Inertia app for cases where you need additional data fetching outside of the initial page load or more fine-grained control over caching.

-   **React Query Overview:** React Query is a library that simplifies data fetching, caching, and synchronization in React apps. It handles background updates and keeps your UI in sync with server data with minimal effort . In other words, it eliminates a lot of boilerplate around loading states, error handling, and repeated fetch calls.

-   **When to use React Query in an Inertia app:** Inertia already handles page-level data loading via props. However, React Query is great for:

    -   Data that needs to refresh periodically or in real-time (e.g., polling for updates, live dashboards).

    -   Managing data from an external API or when using Laravel as a pure API for some parts of the app.

    -   Complex UIs where a page might have sub-components that fetch additional data on their own (e.g., an autocomplete component fetching search results).


-   **Setup:** Wrap your application in a QueryClientProvider. In a Laravel Inertia + React setup, you can modify the app initialization (often in resources/js/app.jsx). For example, initialize a QueryClient and wrap the <App {...props} /> element with <QueryClientProvider client={queryClient}> . This ensures all components can use the React Query hooks.

-   **Using React Query Hooks:** Use useQuery to fetch data and cache it, and useMutation for modifications:

    -   useQuery('key', fetchFunction) will fetch data (e.g., via axios or fetch) and keep it cached under the given key. It returns { data, error, isLoading, refetch, ... }. Always give keys that logically represent the data (e.g., 'users' or ['projects', page] for paginated data).

    -   useMutation is used to post/put/delete data. After a mutation, you often call queryClient.invalidateQueries('key') to refresh related get-queries so the UI updates .

    -   React Query will manage background refetching (e.g., refetch on window focus, or an interval if you set refetchInterval) to keep data fresh .


-   **Benefits:** With React Query, you can avoid manually storing server-fetched data in React useState or context. It also prevents unnecessary requests by caching – e.g., if you navigate away and back, it can serve cached data instantly and then update in background if stale. This leads to a more responsive UI and less duplicated fetch logic .

-   **Example:** Suppose you have a <Dashboard> page that shows stats and needs to update every 30 seconds. You could use:


```
const { data: stats, isLoading } = useQuery(
    'stats',
    fetchStats,
    { refetchInterval: 30000 }
);
```

-   And in fetchStats (perhaps using axios) you call an API route like /api/stats. The result is automatically stored and updated. Your component just uses stats and shows a spinner if isLoading is true.

-   **Integration with Laravel:** You might create dedicated API routes for such data (e.g., a controller that returns JSON). Use Laravel’s resources or transformers to format the data. Protect these routes with Sanctum (for auth) if needed. Inertia pages and React Query API calls can coexist – just be mindful to organize your endpoints and avoid conflicts.

-   **Error Handling:** React Query will give you error objects if a request fails. You can display notifications or messages when errors occur. You might also integrate with Laravel’s error bag or flash messages if an Inertia action triggers an error that you want to catch on the client.




In summary, React Query complements Inertia by handling data needs that don’t fit the basic page load model. It **“manages server state”** effectively, so you can focus on the application’s logic instead of writing repetitive fetch code .



## **Frontend Design & Tailwind CSS**



Modern Laravel apps often use **Tailwind CSS** for styling, and Laravel 12’s ecosystem is tuned for it (the new starter kits come with Tailwind configured ). Tailwind is a utility-first CSS framework that allows rapid UI development with consistent styling:

-   **Tailwind Integration:** Laravel projects include Tailwind by default now, with a preconfigured vite.config.js and tailwind.config.js out of the box . If using the starter kit, everything is set up – you can start using Tailwind classes in your Blade and React JSX. If not using a starter kit, you can follow Tailwind’s official installation for Laravel (but again, Laravel 12’s default scaffolding already has it wired up in most cases).

-   **Utility-First Styling:** Tailwind provides low-level utility classes (like p-4 for padding or text-center for center-align text) that you compose directly in your HTML/JSX. This eliminates context switching between HTML and a separate CSS file and leads to highly consistent design. Emphasize using these pre-built classes instead of writing custom CSS for common tasks. It improves both development speed and code consistency.

-   **Responsive Design:** Use Tailwind’s responsive utilities (e.g., md:p-8 for padding at the medium breakpoint) to create responsive layouts easily. Keep the design mobile-first (Tailwind is mobile-first by design). This way, the AI or developer will naturally create responsive UI without much extra effort.

-   **Styling Conventions:** Keep class lists ordered and readable. Group related utilities together, and consider using **Tailwind’s @apply** in a CSS file if a certain combination of classes is reused frequently to create a custom utility (though often you might not need to, given the breadth of Tailwind’s utilities).

-   **Tailwind Plugins & shadcn/UI:** Laravel’s React starter includes **shadcn/UI** , which is a set of pre-built components (e.g., modal dialogs, dropdowns) built on top of Radix and Tailwind. These can be used to quickly implement complex UI elements with accessibility and good defaults. If available, use these components rather than building your own from scratch – it will ensure the UI follows best practices. Tailwind has other plugins (forms, typography, etc.) that might already be included or can be included to extend utility classes (e.g., better form element defaults).

-   **Dark Mode / Themes:** If your project needs dark mode support, configure Tailwind’s dark mode classes (e.g., dark:bg-gray-800). Plan design tokens (like colors) via the Tailwind config so that switching themes or adjusting branding is straightforward.

-   **Avoid Inline Styles:** With Tailwind, you rarely need inline style attributes or separate CSS files for most styling. If the AI tries to add inline styles, prefer Tailwind classes instead for consistency, unless it’s a dynamic style that truly cannot be handled by a class.




Using Tailwind leads to UI code that sits alongside logic, which can seem verbose but actually enhances clarity – you see exactly how an element is styled at a glance, and it’s easy to adjust. The beauty of Laravel + Tailwind is that it embraces simplicity and avoids the complexity of context-specific CSS, aligning with Laravel’s philosophy of making developers’ lives happier.



## **Testing (Pest PHP and TDD)**



Laravel promotes a testing culture, and **Pest PHP** is a modern testing framework that pairs perfectly with Laravel. In fact, Laravel 12 comes with Pest integrated out of the box alongside PHPUnit . Writing tests ensures your Laravel application remains robust and maintainable.

-   **Pest vs. PHPUnit:** Pest is a wrapper on top of PHPUnit that offers a **simpler, more expressive syntax** for writing tests. For example, a basic Pest test might look like:


```
test('homepage loads successfully', function () {
    $response = $this->get('/');
    $response->assertStatus(200);
});
```

-   This is functionally equivalent to a PHPUnit method in a test class, but Pest removes boilerplate (no class, no method declarations needed). Pest’s philosophy is to bring joy to testing with simplicity .

-   **Out-of-the-box Setup:** A fresh Laravel 12 project includes a tests/ directory with Feature and Unit subdirectories, and comes pre-configured to use Pest or PHPUnit as you prefer . You can run tests with php artisan test (which uses Pest by default, but will run PHPUnit tests as well). The phpunit.xml is preset for a Laravel app, and environment is automatically set to “testing” when running tests .

-   **Writing Tests:** Focus on **feature tests** for most scenarios (HTTP tests that hit your endpoints, see that pages load or actions have expected outcomes) . Pest’s syntax makes it easy to set up such tests. For example, to test a form submission:


```
test('guests cannot create a new task', function () {
    $response = $this->post('/tasks', [
        'title' => 'Test Task',
    ]);
    $response->assertRedirect('/login');
});
```

-   This simulates a POST to a route and checks the behavior. Use Laravel’s built-in test helpers ($this->get, $this->post, $response->assertStatus, etc.) to express expectations clearly. Pest also provides an expect() function for fluent assertions (e.g., expect(User::count())->toBe(5)).

-   **Pest Plugins & Features:** Pest supports plugins and has features like datasets (for data-driven tests) and higher-order expectations. These can make tests more elegant. For instance, you can use datasets to run the same test with multiple inputs. As an expert, you might introduce such techniques to reduce repetition in tests.

-   **Testing Vue/React Components:** Since we are using React via Inertia, most interactive UI is tested via feature tests (ensuring that certain props are present or certain actions yield results). If needed, consider using Laravel Dusk for full browser tests (Dusk is Laravel’s browser automation tool). Dusk can automate a Chrome browser to click through actual pages – useful for testing that your Inertia pages work end-to-end (though it’s heavier and usually a few well-placed Dusk tests for critical flows suffice).

-   **Test-Driven Development (TDD):** Aim to write tests for new features before or as you implement them. This ensures clarity on what the code should do. For example, before coding a new Controller method, write a Pest test that calls the endpoint and expects a certain response or database change. Then implement the code to make it pass. This approach will guide the AI or developer to produce only necessary code and keep focus on requirements.

-   **Database and Model Factories in Tests:** Use Laravel’s model factories in tests to generate data. For instance, if you have a UserFactory, you can do User::factory()->create() to quickly get a user in the database. This is cleaner than manually constructing model instances and saves time. The Pest/PHPUnit setup will run these within transactions so tests remain isolated.

-   **Continuous Testing:** If using an AI agent (like JetBrains Junie) or during development, run tests often. The AI should be instructed to run artisan test frequently to catch regressions. You can also use Pest’s watch mode (./vendor/bin/pest --watch) to automatically run relevant tests on file changes – a productivity booster.




In essence, testing with Pest in Laravel is designed to be **enjoyable and non-intimidating** . A well-tested Laravel application is a sign of expertise, as it indicates confidence in the code’s correctness and flexibility for future changes.



## **Tools and Best Practices in the Laravel Ecosystem**



Beyond the core framework and testing, Laravel provides a rich ecosystem of tools that an expert developer should utilize for writing clean, maintainable code:

-   **Laravel Pint (Code Style Fixer):** As mentioned, Pint keeps your PHP code style consistent. It’s installed by default with Laravel 12 . Make it part of your routine (or CI pipeline) to run Pint, so all code merges meet the style guide. This frees you from worrying about spaces/braces and lets you focus on logic.

-   **Static Analysis (Larastan/Psalm):** To elevate code quality, incorporate static analysis. **Larastan** (PHPStan’s Laravel extension) can be installed to analyze your code for bugs or non-conforming usage of Laravel’s APIs. It can catch things like calling undefined methods, wrong relation names, etc. Setting up Larastan with level 5 or 6 strictness can greatly reduce runtime errors.

-   **Debugging Tools:** Utilize Laravel’s debugging tools like **Telescope** (a debug assistant to inspect requests, DB queries, etc.) or **Ray** (from Spatie) during development. These help in understanding what your code is doing, performance bottlenecks, and any errors. For instance, Telescope can show you every query executed for a request, which is invaluable for optimizing and ensuring no N+1 queries.

-   **Performance and Caching:** Follow best practices for performance:

    -   Use Laravel’s caching mechanisms (view cache, route cache, config cache) especially in production. For example, run php artisan config:cache when deploying to compile configuration for faster loading.

    -   If your app has heavy realtime or concurrent needs, consider running Laravel Octane (swoole or roadrunner) for serving requests, but this is an advanced option.

    -   Utilize query caching via Laravel if needed (e.g., remember on query builders) or full page response caching if appropriate (Laravel Response Cache package).


-   **Queuing and Jobs:** Offload lengthy tasks to background jobs using Laravel’s queue if the app requires it (e.g., sending emails, processing uploads). Use **Laravel Horizon** to monitor queues if using Redis/drivers that support it. This ensures web requests (and thus Inertia responses) remain snappy.

-   **Environment Management:** Keep sensitive credentials and environment-specific configs in the .env file. The AI should be aware not to commit secrets to version control. Also, ensure the AI knows that certain operations (like running php artisan migrate:fresh) should typically be done in development, not production.

-   **Composer and Packages:** Adhere to semantic versioning in composer.json (Laravel 12 uses ^12.0 for framework packages ). Regularly update dependencies (Laravel has weekly patch releases). When adding packages, choose well-maintained ones (check Laravel News or Packalyst for recommendations). Popular packages in the Laravel ecosystem that you might consider: Spatie’s libraries (e.g., permissions, media library), debugging tools, etc. However, avoid overloading the project with too many packages – use them judiciously to maintain a “light” and understandable codebase.

-   **Version Control & Deployment:** Ensure all code is checked into version control (git). Use Laravel-specific .gitignore rules (which are usually provided in the default project) so that compiled files, environment files, etc., are not committed. For deployments, consider using **Laravel Forge** (for managing your own servers) or **Laravel Vapor** (for serverless deployment) for professionalism. They streamline deploying Laravel apps.

-   **Laravel New Features:** Keep an eye on new Laravel features. For example, Laravel 11/12 added things like **Precognition** (for front-running validation requests), **Prompts** (for interactive console commands), **Pennant** (feature flags), etc., which might come in handy for advanced use-cases. Being aware of these allows an AI or developer to utilize them when appropriate, showcasing true expertise.




By leveraging these tools and practices, you ensure that the Laravel application is not just working, but is **clean, efficient, and maintainable**. An expert Laravel developer (or AI agent) will use the right tool for the right job – whether it’s running Pint for style, writing tests for confidence, or caching for performance – to deliver a high-quality project.



## **Conclusion**



By following this guide, the AI (or any developer) should be well-equipped to work on **Laravel 12 with React and Inertia** at an expert level. Key takeaways include:

-   Setting up a smooth **development environment on MacOS** with Laravel Herd .

-   Adhering to **Laravel’s coding style** and conventions for elegant, readable code (aided by tools like Pint ).

-   Mastering Laravel’s **MVC structure** – routes, controllers, models, migrations – and using Eloquent ORM effectively for database interactions.

-   Integrating **React via Inertia** to build a modern single-page application without abandoning Laravel’s server-driven approach . This includes managing client-side state with tools like React Query for optimal UX .

-   Using **Tailwind CSS** for clean, maintainable styling and leveraging Laravel’s front-end tooling (Vite) to compile assets.

-   Ensuring code quality with **testing (Pest)** , static analysis, and following best practices around performance and security.




Laravel 12 continues Laravel’s tradition of making web development a delightful experience by providing clear structure and powerful features. With React and Inertia in the mix, you get to create interactive, dynamic applications while still enjoying Laravel’s famed developer experience. Keep the codebase stylish and artisanally crafted – much like the framework itself – and aim for solutions that are as elegant as they are functional. Happy coding!


# Laravel 12 Expert Development Guide (MacOS, Herd, React & Inertia)

...

[Full guide content continues here; truncated for display]

...

Laravel 12 continues Laravel’s tradition of making web development a delightful experience by providing clear structure and powerful features. With React and Inertia in the mix, you get to create interactive, dynamic applications while still enjoying Laravel’s famed developer experience. Keep the codebase stylish and artisanally crafted – much like the framework itself – and aim for solutions that are as elegant as they are functional. Happy coding!

# Laravel 12 Expert Guide for macOS with Laravel Herd, React, Inertia, and Modern Tooling

Welcome to your expert guide for building modern Laravel 12 applications on macOS using [Laravel Herd](https://herd.laravel.com/), React, Inertia.js, and a suite of modern developer tools. This guide will walk you through the entire process, from environment setup to advanced best practices, with a focus on productivity and maintainability.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Creating a New Laravel 12 Project](#creating-a-new-laravel-12-project)
4. [Configuring React, Inertia.js, and Vite](#configuring-react-inertiajs-and-vite)
5. [Styling with Tailwind CSS](#styling-with-tailwind-css)
6. [Type Checking and Linting](#type-checking-and-linting)
7. [Automated Code Formatting with Laravel Pint](#automated-code-formatting-with-laravel-pint)
8. [Testing with Pest](#testing-with-pest)
9. [Data Fetching with React Query](#data-fetching-with-react-query)
10. [Recommended Directory Structure](#recommended-directory-structure)
11. [Advanced Tips](#advanced-tips)
12. [References](#references)

---

## Prerequisites

- macOS (Sonoma or later recommended)
- [Laravel Herd](https://herd.laravel.com/) (for PHP, MySQL, Nginx, and more)
- [Homebrew](https://brew.sh/) (for installing Node.js and other tools)
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Composer](https://getcomposer.org/)
- [Git](https://git-scm.com/)

---

## Environment Setup

### 1. Install Laravel Herd

Download and install [Laravel Herd](https://herd.laravel.com/) for macOS. It provides a zero-configuration PHP development environment with PHP, Nginx, and MySQL out of the box.

### 2. Install Homebrew (if not already installed)

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 3. Install Node.js and Yarn (optional)

```bash
brew install node
npm install --global yarn
```

### 4. Install Composer

Laravel Herd includes Composer, but you can install it separately if needed:

```bash
brew install composer
```

---

## Creating a New Laravel 12 Project

Open Terminal and run:

```bash
cd ~/Sites # or your preferred dev directory
herd composer create-project laravel/laravel:^12.0 my-app
cd my-app
```

#### Serve via Herd
Herd automatically serves projects in `~/Sites` at `https://my-app.test`.

---

## Configuring React, Inertia.js, and Vite

### 1. Install Inertia.js, React, and Vite Preset

```bash
herd composer require inertiajs/inertia-laravel
npm install @inertiajs/react @inertiajs/progress @vitejs/plugin-react
```

### 2. Install Laravel Breeze (for authentication & scaffolding)

```bash
herd composer require laravel/breeze --dev
herd php artisan breeze:install react
npm install
npm run dev
```

_This sets up React, Inertia.js, Vite, and a basic auth flow._

### 3. Configure Vite for React

Ensure your `vite.config.js` includes:

```js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/js/app.jsx',
            'resources/css/app.css',
        ]),
        react(),
    ],
});
```

---

## Styling with Tailwind CSS

### 1. Install Tailwind CSS and dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure `tailwind.config.js`

```js
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.jsx',
    './resources/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import Tailwind in `resources/css/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## Type Checking and Linting

### 1. Add TypeScript (optional but recommended)

```bash
npm install --save-dev typescript @types/react @types/node
npx tsc --init
```

Rename your main React files from `.jsx` to `.tsx` for TypeScript support.

### 2. Add ESLint and Prettier

```bash
npm install --save-dev eslint prettier eslint-plugin-react eslint-config-prettier
npx eslint --init
```

Sample `.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier"
  ],
  "plugins": ["react"],
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

---

## Automated Code Formatting with Laravel Pint

Laravel Pint is a zero-config code style fixer for PHP.

### 1. Install Pint

```bash
herd composer require laravel/pint --dev
```

### 2. Run Pint

```bash
herd pint
```

Or add to `composer.json` scripts:

```json
"scripts": {
    "format": "pint"
}
```

---

## Testing with Pest

[Pest](https://pestphp.com/) provides a delightful PHP testing experience.

### 1. Install Pest

```bash
herd composer require pestphp/pest --dev
herd php artisan pest:install
```

### 2. Run Tests

```bash
herd php artisan test
```

Or with Pest directly:

```bash
./vendor/bin/pest
```

### 3. Add JS/React Testing (Jest or Vitest)

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

Add a `vitest.config.ts` for configuration.

---

## Data Fetching with React Query

[React Query](https://tanstack.com/query/latest) simplifies data fetching and caching in React.

### 1. Install React Query

```bash
npm install @tanstack/react-query
```

### 2. Set up React Query Provider

In `resources/js/app.jsx` (or `.tsx`):

```jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
```

### 3. Usage Example

```jsx
import { useQuery } from '@tanstack/react-query';

function UsersList() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}
```

---

## Recommended Directory Structure

```
my-app/
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   ├── Components/
│   │   └── app.jsx
│   └── css/
│       └── app.css
├── routes/
│   ├── web.php
│   └── api.php
├── tests/
│   ├── Feature/
│   └── Unit/
├── vite.config.js
├── tailwind.config.js
├── package.json
├── composer.json
└── ...
```

---

## Advanced Tips

- **Hot Reloading:** Use `npm run dev` for instant feedback.
- **Environment Variables:** Use `.env` for secrets and settings.
- **API Resources:** Use Laravel API resources for clean JSON APIs.
- **Inertia Middlewares:** Use Inertia middleware for shared data (`HandleInertiaRequests`).
- **Deployment:** Use [Laravel Forge](https://forge.laravel.com/) or [Envoyer](https://envoyer.io/) for smooth deployments.
- **Database Migrations & Seeders:** Use `herd php artisan migrate --seed`.
- **Debugging:** Use [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar) for advanced debugging.
- **IDE Helper:** Install [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper) for improved code completion.
- **Static Analysis:** Use [Larastan](https://github.com/nunomaduro/larastan) for static analysis.

---

## References

- [Laravel Official Docs](https://laravel.com/docs)
- [Inertia.js Docs](https://inertiajs.com/)
- [React Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Pest Docs](https://pestphp.com/docs/)
- [Laravel Pint](https://laravel.com/docs/12.x/pint)
- [Laravel Herd](https://herd.laravel.com/)

---

## Conclusion

Laravel 12, combined with React, Inertia.js, and modern tooling like Pint, Pest, React Query, and Tailwind CSS, empowers you to build robust, maintainable, and delightful web applications on macOS. With Laravel Herd, setup is effortless, letting you focus on crafting elegant solutions.

Happy coding!
