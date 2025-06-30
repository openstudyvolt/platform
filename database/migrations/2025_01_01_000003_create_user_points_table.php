<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_points', static function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class)->index()->constrained()->cascadeOnDelete();
            $table->integer('points')->default(0);
            $table->string('action_type'); // summary_created, quiz_completed, daily_streak, etc.
            $table->string('description')->nullable();
            $table->morphs('pointable'); // Related model (summary, quiz, etc.)
            $table->json('metadata')->nullable(); // Additional context
            $table->timestamps();

            $table->index(['user_id', 'created_at']);
            $table->index('action_type');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_points');
    }
};
